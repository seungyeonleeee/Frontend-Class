import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate, useMatch, Link } from "react-router-dom";
import { PathMatch } from "react-router-dom";
import { AnimatePresence, motion, useScroll } from "framer-motion";
import { makeImagePath } from "../utils";
import { getReviews, getVideos, Movie, searchGeneres } from "../api";
import { useQuery } from "@tanstack/react-query";
import YouTube from "react-youtube";
import { ReviewContents } from "../pages/Search";

const ModalBox = styled(motion.article)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 667px;
  max-height: 700px;
  width: 90%;
  background: ${({ theme }) => theme.black.darker};
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  overflow: hidden auto;
  z-index: 3;
  scrollbar-width: thin;
  scrollbar-color: #333 #111;
`;
const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.2);
  cursor: pointer;
  z-index: 2;
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
    transition: stroke 0.3s;
  }
  &:hover {
    svg {
      stroke: ${({ theme }) => theme.red};
    }
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
  gap: 12px;
  padding: 1rem 2.5rem 2.5rem;
  position: relative;
  .star-svg {
    fill: ${({ theme }) => theme.white.darker};
    stroke: ${({ theme }) => theme.white.darker};
    stroke-width: 1.2;
  }
`;
const MovieTitle = styled.h2`
  font-size: 2.8rem;
  font-weight: 500;
  position: absolute;
  top: -40px;
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
const MovieOverView = styled.p`
  font-size: 1.6rem;
  margin: 10px 0;
`;
const MovieVideoBox = styled.div`
  width: 100%;
  height: 400px;
`;
const MovieRateBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${({ theme }) => theme.black.lighter};
  padding: 10px 15px;
  border-radius: 5px;
  .rate-box {
    .star-box {
      display: flex;
      align-items: center;
      gap: 5px;
      margin-bottom: 5px;
      svg {
        width: 25px;
        height: 25px;
      }
    }
    span {
      font-size: 1.4rem;
      color: ${({ theme }) => theme.white.darker};
    }
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
  margin-top: 10px;
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
const MovieReviewBox = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  li {
    display: flex;
    flex-direction: column;
    gap: 5px;
    border-bottom: 1px solid ${({ theme }) => theme.black.lighter};
    padding-bottom: 10px;
    .review-star {
      display: flex;
      align-items: center;
      gap: 3px;
      svg {
        width: 15px;
        height: 15px;
      }
    }
    .review-author {
      display: flex;
      align-items: center;
      gap: 5px;
      font-size: 1.2rem;
      color: ${({ theme }) => theme.white.darker};
    }
    .review-content {
      span {
        font-size: 1.4rem;
      }
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
interface VideoContents<T> {
  [key: number]: T[];
}

const Modal = ({ data }: { data: any }) => {
  const ids = data?.results.map((movie: Movie) => movie.id);
  const [videos, setVideos] = useState<VideoContents<string>>({});
  const history = useNavigate();

  const movieMatch: PathMatch<string> | null = useMatch("/movies/:movieId");

  const clickedMovie =
    movieMatch?.params.movieId &&
    data?.results.find((movie: Movie) => {
      return movie.id === +movieMatch.params.movieId!;
    });

  const { data: genereData, isLoading: genereLoading } = useQuery({
    queryKey: ["getGeneres"],
    queryFn: searchGeneres,
  });
  const { data: videoData, isLoading: videoLoading } = useQuery({
    queryKey: ["getVideos", ids],
    queryFn: () =>
      ids
        ? Promise.all(ids.map((id: number) => getVideos(id)))
        : Promise.resolve([]),
    enabled: !!clickedMovie?.id,
  });
  const { data: reviewData, isLoading: reviewLoading } = useQuery({
    queryKey: ["getReview", clickedMovie?.id],
    queryFn: () => getReviews(clickedMovie?.id),
    enabled: !!clickedMovie?.id,
  });

  const formattedRating =
    Math.floor(clickedMovie?.vote_average?.toFixed(1) / 2) === 0
      ? 1
      : Math.floor(clickedMovie?.vote_average?.toFixed(1) / 2);
  const formattedReviews = reviewData?.results.map(
    (review: ReviewContents) => ({
      ...review,
      author_details: {
        ...review.author_details,
        rating:
          Math.floor(review.author_details.rating / 2) === 0
            ? 1
            : Math.floor(review.author_details.rating / 2),
      },
    })
  );

  const onOverlayClick = () => {
    history(`/`);
  };

  useEffect(() => {
    if (data && videoData) {
      data.results.forEach((movie: Movie) => {
        getVideos(movie.id).then((data) => {
          if (data?.results) {
            const videoIds = data.results.map((video: any) => video.key);
            setVideos((prev) => ({
              ...prev,
              [movie.id]: videoIds,
            }));
          }
        });
      });
    }
  }, [data, videoData]);

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
          {clickedMovie && (
            <ModalBox
              variants={ModalVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
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
                {clickedMovie.overview && (
                  <MovieOverView>{clickedMovie.overview}</MovieOverView>
                )}
                {videos[clickedMovie.id]?.length > 0 && (
                  <MovieVideoBox>
                    <YouTube
                      videoId={videos[clickedMovie.id][0]}
                      opts={{
                        width: "100%",
                        height: "400px",
                      }}
                    />
                  </MovieVideoBox>
                )}
                <MovieRateBox>
                  <div className="rate-box">
                    <div className="star-box">
                      {Array.from({ length: 5 }, (_, index) => (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="star-svg"
                          viewBox="0 0 24 24"
                          key={index}
                          fillOpacity={index >= formattedRating ? 0 : 1}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                          />
                        </svg>
                      ))}
                    </div>
                    <span>
                      {clickedMovie.vote_count?.toLocaleString("ko-kr")}개 평점
                    </span>
                  </div>
                  <h4>{clickedMovie.vote_average?.toFixed(2)}</h4>
                </MovieRateBox>
                {data.results.length > 0 && (
                  <MovieReviewBox>
                    {formattedReviews?.map((review: ReviewContents) => (
                      <li key={review.id}>
                        <div className="review-star">
                          {Array.from({ length: 5 }, (_, index) => (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="star-svg"
                              viewBox="0 0 24 24"
                              key={index}
                              fillOpacity={
                                index >= review.author_details.rating ? 0 : 1
                              }
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                              />
                            </svg>
                          ))}
                        </div>
                        <div className="review-author">
                          <span>{review.author}</span>
                          &middot;
                          <span>{review.created_at.slice(0, 10)}</span>
                        </div>
                        <div className="review-content">
                          <span>{review.content}</span>
                        </div>
                      </li>
                    ))}
                  </MovieReviewBox>
                )}
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
            </ModalBox>
          )}
        </>
      ) : null}
    </AnimatePresence>
  );
};

export default Modal;
