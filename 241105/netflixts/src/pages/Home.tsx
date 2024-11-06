import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import styled from "styled-components";
import { motion, AnimatePresence, delay } from "framer-motion";
import { getMovies, GetMoviesResult } from "../api";
import { makeImagePath } from "../utils";

// Styled
const Container = styled.div`
  width: 100%;
  height: 3000px;
  margin-top: 60px;
  background: ${({ theme }) => theme.black.lighter};
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
      delay: 0.3,
      type: "tween",
    },
  },
};

// Pagenation
const offset = 6; // 한페이지에 보일 슬라이드 개수

const Home = () => {
  // Get Data
  const { data, isLoading } = useQuery<GetMoviesResult>({
    queryKey: ["nowPlaying"],
    queryFn: getMovies,
  });
  // console.log(data, isLoading);

  // Slide State
  const [index, setIndex] = useState(0);
  const [leaving, setLeaving] = useState(false);

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
            <Title>이승연 바보</Title>
            <Overview>{data?.results[0].overview}</Overview>
            <Overview>
              그녀는 4개의 술식 육식, 폭식, 과식, 무식을 다룰 수 있다... <br />
              그만 팔아라 이상한거 그만 팔아라 그만 팔으라고 했다 진짜 그만
              팔아라 8천원은 뭐 블랙마켓 강매도 아니고 여기가 무슨 물가가
              베네수엘라야? <br /> 승연아 사랑해!
            </Overview>
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
                      key={movie.id}
                      variants={boxVariants}
                      $bgPhoto={makeImagePath(movie.backdrop_path || "")}
                      whileHover="hover"
                    >
                      {movie.title}
                    </Box>
                  ))}
                {/* 2번부터 끝까지 찾아오기(18개로 맞추려고), index = page */}
              </Row>
            </AnimatePresence>
          </Slider>
        </>
      )}
    </Container>
  );
};

export default Home;
