import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useNavigate, useMatch, PathMatch } from "react-router-dom";
import styled from "styled-components";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import { getMovies, GetMoviesResult } from "../api";
import { makeImagePath } from "../utils";

// Styled
const Container = styled.div`
  width: 100%;
  height: 3000px;
  margin-top: 60px;
  background: ${({ theme }) => theme.black.lighter};
  overflow-x: hidden;
`;
const Loader = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.red};
  font-size: 22px;
`;
const Banner = styled.div<{ $bgPhoto: string | undefined }>`
  color: ${({ theme }) => theme.white.darker};
  height: calc(100vh - 60px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 60px;
  background: linear-gradient(to left, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)),
    url(${(props) => props.$bgPhoto}) center/cover no-repeat;
`;
const Title = styled.h2`
  font-size: 68px;
  margin-bottom: 10px;
`;
const Overview = styled.p`
  font-size: 22px;
  width: 50%;
`;
const Slider = styled.div`
  position: relative;
  top: -100px;
  width: 100%;
`;
const Row = styled(motion.div)`
  position: absolute;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 10px;
`;
const Box = styled(motion.div)<{ $bgPhoto: string | undefined }>`
  position: relative;
  width: auto;
  height: 200px;
  background: url(${(props) => props.$bgPhoto}) center/cover no-repeat;
  font-size: 22px;
  cursor: pointer;
  &:first-child {
    transform-origin: center left;
  }
  &:last-child {
    transform-origin: center right;
  }
`;
const Info = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 20px;
  background: rgba(0, 0, 0, 0.5);
  opacity: 0;
  h4 {
    color: ${({ theme }) => theme.white.lighter};
    text-align: center;
    font-size: 16px;
  }
`;
const ModalBox = styled(motion.div)`
  position: fixed;
  left: 0;
  right: 0;
  margin: 0 auto;
  width: 40vw;
  height: 80vh;
  color: ${({ theme }) => theme.white.darker};
  background: ${({ theme }) => theme.black.lighter};
  border-radius: 8px;
  overflow: hidden;
`;
const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  cursor: pointer;
`;
const MovieCover = styled.img`
  width: 100%;
  height: 400px;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;
const MovieTitle = styled.h2`
  color: ${({ theme }) => theme.white.lighter};
  text-align: center;
  font-size: 28px;
  padding: 10px;
  padding-bottom: 0;
  position: relative;
  top: -80px;
`;
const MovieOverView = styled.p`
  padding: 0 20px;
  font-size: 20px;
  line-height: 1.5;
  position: relative;
  top: -40px;
`;

// Motion Variants
const rowVariants = {
  hidden: {
    x: window.innerWidth + 10,
  },
  visible: {
    x: 0,
  },
  exit: {
    x: -window.innerWidth - 10,
  },
};
const boxVariants = {
  normal: {},
  hover: {
    scale: 1.2,
    y: -40,
    transition: {
      delay: 0.5,
      type: "tween",
    },
  },
};
const infoVariants = {
  hover: {
    opacity: 0.8,
    transition: {
      delay: 0.3,
      type: "tween",
    },
  },
};

// Pagenation
const offset = 6; // 한페이지에 보일 슬라이드 개수

const Home = () => {
  // Modal
  const history = useNavigate();
  const movieMatch: PathMatch<string> | null = useMatch("/movies/:movieId");
  // console.log(movieMatch);

  // Get Data
  const { data, isLoading } = useQuery<GetMoviesResult>({
    queryKey: ["nowPlaying"],
    queryFn: getMovies,
  });
  // console.log(data, isLoading);

  // Slide State
  const [index, setIndex] = useState(0);
  const [leaving, setLeaving] = useState(false);

  // Scroll Modal
  const { scrollY } = useScroll();
  // console.log(scrollY);

  // Slide Trigger
  const increaseIndex = () => {
    if (data) {
      if (leaving) return;
      setLeaving(true);
      const totalMovies = data.results.length - 2;
      const maxIndex = Math.ceil(totalMovies / offset) - 1;
      setIndex((prev) => (prev === maxIndex ? 0 : prev + 1));
    }
  };
  const toggleLeaving = () => setLeaving((prev) => !prev);

  // Click Modal
  const onBoxClick = (movieId: number) => {
    history(`/movies/${movieId}`);
  };
  const onOverlayClick = () => {
    history(`/`);
  };
  // 클릭한 영화의 정보 가져오기
  const clickedMovie =
    movieMatch?.params.movieId &&
    data?.results.find((movie) => movie.id === +movieMatch.params.movieId!);
  // console.log(clickedMovie);

  return (
    <Container>
      {isLoading ? (
        <Loader>Loading...</Loader>
      ) : (
        <>
          <Banner
            onClick={increaseIndex}
            $bgPhoto={makeImagePath(data?.results[0].backdrop_path || "")}
          >
            <Title>{data?.results[0].original_title}</Title>
            <Overview>{data?.results[0].overview}</Overview>
          </Banner>
          <Slider>
            <AnimatePresence initial={false} onExitComplete={toggleLeaving}>
              <Row
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{ type: "tween", duration: 1 }}
                variants={rowVariants}
                key={index}
              >
                {data?.results
                  .slice(2)
                  .slice(index * offset, index * offset + offset)
                  .map((movie) => (
                    <Box
                      onClick={() => onBoxClick(movie.id)}
                      key={movie.id}
                      layoutId={movie.id + ""}
                      // layoutId는 문자만 가능
                      variants={boxVariants}
                      $bgPhoto={makeImagePath(movie.backdrop_path || "")}
                      whileHover="hover"
                    >
                      <Info variants={infoVariants}>
                        <h4>{movie.title}</h4>
                      </Info>
                    </Box>
                  ))}
                {/* 2번부터 끝까지 찾아오기(18개로 맞추려고), index = page */}
              </Row>
            </AnimatePresence>
          </Slider>
          <AnimatePresence>
            {movieMatch ? (
              <>
                <Overlay
                  onClick={onOverlayClick}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                />
                <ModalBox
                  style={{ top: scrollY.get() + 60 }}
                  layoutId={movieMatch.params.movieId}
                >
                  {clickedMovie && (
                    <>
                      <MovieCover
                        style={{
                          backgroundImage: `linear-gradient(to top, #000, transparent) ,url(
                          ${makeImagePath(clickedMovie.backdrop_path, "w500")}
                        )`,
                        }}
                      />
                      <MovieTitle>{clickedMovie.title}</MovieTitle>
                      <MovieOverView>{clickedMovie.overview}</MovieOverView>
                    </>
                  )}
                </ModalBox>
              </>
            ) : null}
          </AnimatePresence>
        </>
      )}
    </Container>
  );
};

export default Home;
