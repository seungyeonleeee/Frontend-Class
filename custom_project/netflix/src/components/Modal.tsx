import React from "react";
import styled from "styled-components";
import { useNavigate, useMatch, Link } from "react-router-dom";
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
        rgb(24, 24, 24) 24%,
        rgba(24, 24, 24, 0) 56%
      ),
      linear-gradient(0deg, rgb(24, 24, 24) 4%, rgba(24, 24, 24, 0) 69%);
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
  font-size: 2.8rem;
  font-weight: 500;
  position: absolute;
  top: -50px;
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
    font-size: 1.4rem;
  }
`;
const MoveSiteButton = styled.div`
  width: 120px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.red};
  border-radius: 8px;
  position: relative;
  overflow: hidden;
  a {
    width: 100%;
    height: 100%;
    text-align: center;
    line-height: 40px;
    position: relative;
    z-index: 1;
  }
  &::after {
    content: "";
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0);
    position: absolute;
    top: 0;
    left: 0;
    transition: background 0.3s ease-in-out;
  }
  &:hover,
  &:active {
    &::after {
      background: rgba(0, 0, 0, 0.2);
    }
  }
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

  const clickedMovie =
    movieMatch?.params.movieId &&
    data?.results.find(
      (movie: Movie) => movie.id === +movieMatch.params.movieId!
    );
  // console.log(clickedMovie);

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
                  {clickedMovie.overview && <p>{clickedMovie.overview}</p>}
                  <MoveSiteButton>
                    <Link
                      target="_blank"
                      to={`https://www.themoviedb.org/movie/${clickedMovie.id}-${clickedMovie.original_title}?language=ko`}
                    >
                      자세히 보기
                    </Link>
                  </MoveSiteButton>
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
