import React from "react";
import styled from "styled-components";
import { useNavigate, useMatch } from "react-router-dom";
import { PathMatch } from "react-router-dom";
import { AnimatePresence, motion, useScroll } from "framer-motion";
import { makeImagePath } from "../utils";
import { Movie, searchGeneres } from "../api";
import { useQuery } from "@tanstack/react-query";

const ModalBox = styled(motion.article)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 667px;
  width: 90%;
  height: auto;
  color: ${({ theme }) => theme.white.darker};
  background: ${({ theme }) => theme.black.darker};
  border: 1px solid ${({ theme }) => theme.white.darker};
  border-radius: 8px;
  overflow: hidden;
  z-index: 3;
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
const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  cursor: pointer;
  width: 30px;
  height: 30px;
  svg {
    width: 100%;
    height: 100%;
    stroke: ${({ theme }) => theme.white.lighter};
    stroke-width: 1.5;
  }
`;
const MovieCover = styled(motion.div)`
  width: 100%;
  height: 400px;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 101%;
    background: linear-gradient(
        30deg,
        rgb(24, 24, 24) 24.16%,
        rgba(24, 24, 24, 0) 56.61%
      ),
      linear-gradient(0deg, rgb(24, 24, 24) 3.91%, rgba(24, 24, 24, 0) 69.26%);
  }
`;
const ModalContents = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 1rem 2.5rem 2.5rem;
  position: relative;
`;
const MovieTitle = styled.h2`
  color: ${({ theme }) => theme.white.lighter};
  font-size: 28px;
  position: absolute;
  top: -3rem;
`;
const MovieInfo = styled.ul`
  display: flex;
  align-items: center;
  gap: 6px;
  li {
    background: ${({ theme }) => theme.black.lighter};
    color: ${({ theme }) => theme.white.darker};
    padding: 5px 10px;
    border-radius: 5px;
    font-size: 14px;
  }
`;
const MovieOverView = styled.p`
  font-size: 16px;
  line-height: 1.5;
  color: ${({ theme }) => theme.white.lighter};
`;

const ModalVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
};
const MovieCoverVariants = {
  initial: {
    filter: "blur(10px)",
  },
  animate: {
    filter: "blur(0px)",
    transition: {
      delay: 0.3,
    },
  },
  exit: {
    filter: "blur(10px)",
  },
};

interface GenresItem {
  id: number;
  name: string;
}

const Modal = ({ data }: { data: any }) => {
  const history = useNavigate();

  const movieMatch: PathMatch<string> | null = useMatch("/movies/:movieId");

  const { data: genereData, isLoading: genereLoading } = useQuery({
    queryKey: ["getGeneres"],
    queryFn: searchGeneres,
  });

  const onOverlayClick = () => {
    history(`/`);
  };
  // 클릭한 영화의 정보 가져오기
  const clickedMovie =
    movieMatch?.params.movieId &&
    data?.results.find(
      (movie: Movie) => movie.id === +movieMatch.params.movieId!
    );
  console.log(clickedMovie);

  return (
    <AnimatePresence>
      {movieMatch ? (
        <>
          <Overlay
            onClick={onOverlayClick}
            variants={ModalVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          />
          <ModalBox
            variants={ModalVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            {clickedMovie && (
              <>
                <MovieCover
                  variants={MovieCoverVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  style={{
                    backgroundImage: `url(
                ${makeImagePath(clickedMovie.backdrop_path)}
              )`,
                  }}
                />
                <ModalContents>
                  <MovieTitle>{clickedMovie.title}</MovieTitle>
                  <MovieInfo>
                    <li>{clickedMovie.release_date.slice(0, 4)}</li>
                    <li>{clickedMovie.adult ? "18+" : "ALL"}</li>
                    {clickedMovie.genre_ids.map((id: number) => (
                      <li key={id}>
                        {
                          genereData?.genres.find(
                            (item: GenresItem) => item.id === id
                          ).name
                        }
                      </li>
                    ))}
                  </MovieInfo>
                  <MovieOverView>{clickedMovie.overview}</MovieOverView>
                </ModalContents>
                <CloseButton onClick={onOverlayClick}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18 18 6M6 6l12 12"
                    />
                  </svg>
                </CloseButton>
              </>
            )}
          </ModalBox>
        </>
      ) : null}
    </AnimatePresence>
  );
};

export default Modal;
