import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { searchContents, GetMoviesResult, Movie } from "../api";
import { makeImagePath } from "../utils";
import Pagination from "react-js-pagination";
import { useSetRecoilState } from "recoil";
import { isModalAtom } from "../atoms";

// Styled
const Container = styled.main`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
  padding: 100px 0;
  position: relative;
`;
const Inner = styled.section`
  width: var(--inner-width);
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  margin: 5vh 0;
`;
const SearchMovieBox = styled.article`
  cursor: pointer;
  .search-movie-cover {
    width: 100%;
    height: 330px;
    border-radius: 8px;
    overflow: hidden;
    margin-bottom: 10px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.3s;
    }
    &.not-available {
      display: flex;
      justify-content: center;
      align-items: center;
      background: ${({ theme }) => theme.black.lighter};
      svg {
        width: 40%;
        height: 40%;
        fill: none;
        stroke: ${({ theme }) => theme.black.darker};
        stroke-width: 1.5;
      }
    }
    &:hover {
      img {
        transform: scale(1.04);
      }
    }
  }
  .search-movie-title {
    font-size: 1.8rem;
    color: ${({ theme }) => theme.white.darker};
  }
`;
const SearchBox = styled.div`
  width: 100%;
  padding: 10px;
`;
const MovieSection = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;
`;
const MovieImg = styled.img`
  width: 50%;
  height: auto;
  object-fit: cover;
`;
const ImgBox = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  border: 1px solid ${({ theme }) => theme.black.lighter};
  border-radius: 8px;
`;
const MovieInfo = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 14px;
`;
const MovieTitle = styled.h4`
  font-size: 36px;
  color: ${({ theme }) => theme.white.darker};
  background: ${({ theme }) => theme.red};
  border-radius: 8px;
  padding: 0 10px;
`;
const MovieOverview = styled.p`
  font-size: 24px;
  line-height: 1.5;
  border-top: 1px solid ${({ theme }) => theme.black.lighter};
  border-bottom: 1px solid ${({ theme }) => theme.black.lighter};
  padding: 20px 10px;
`;
const MovieDate = styled.div`
  font-size: 18px;
  span {
    display: block;
    background: #ffa300;
    padding: 10px;
    border-radius: 8px;
  }
`;
const MovieValue = styled.div`
  width: 50px;
  height: 50px;
  font-size: 18px;
  background: ${({ theme }) => theme.black.lighter};
  color: ${({ theme }) => theme.white.darker};
  text-align: center;
  line-height: 50px;
  border-radius: 8px;
`;
const Ganres = styled.div`
  background: #ffa300;
  padding: 10px;
  border-radius: 8px;
`;
const MovieRate = styled.div`
  font-size: 18px;
  span {
    display: block;
    background: #ffa300;
    padding: 10px;
    border-radius: 8px;
  }
`;
const RateNumbers = styled.div`
  font-size: 18px;
  span {
    display: block;
    background: #ffa300;
    padding: 10px;
    border-radius: 8px;
  }
`;
const ReviewSection = styled.div`
  background: ${({ theme }) => theme.white.darker};
  color: ${({ theme }) => theme.black.lighter};
  margin: 20px 0;
  padding: 20px;
  border-radius: 8px;
  li {
    padding: 10px;
  }
`;
const ReviewAuthor = styled.div`
  background: ${({ theme }) => theme.white.lighter};
  width: 150px;
  text-align: center;
  margin-bottom: 8px;
  padding: 8px 0;
  border-radius: 8px;
`;
const ReviewContent = styled.div`
  font-style: 14px;
`;
const VideoSection = styled.div``;
const StyledPagination = styled.div`
  position: absolute;
  left: 50%;
  bottom: 8vh;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  ul {
    display: flex;
    align-items: center;
    gap: 10px;
    li {
      a {
        display: inline-block;
        color: ${({ theme }) => theme.black.darker};
        font-size: 20px;
        transition: color 0.3s;
        &:hover {
          color: ${({ theme }) => theme.red};
        }
      }
    }
  }
`;

const Search = () => {
  // Search Keyword
  const { search } = useLocation();
  const keyword = new URLSearchParams(search).get("keyword");
  // Modal
  const setModal = useSetRecoilState(isModalAtom);

  // Movie Data
  const { data: movieData, isLoading: movieLoading } =
    useQuery<GetMoviesResult>({
      queryKey: ["multiContents", keyword],
      queryFn: () => searchContents(keyword),
    });

  // Modal Open
  const onSearchBoxClick = (movieId: number) => {
    setModal({ movieId, data: movieData });
  };

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [moviesPerPage, setMoviesPerPage] = useState(8);
  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFistMovie = indexOfLastMovie - moviesPerPage;
  const currentMovies: Movie[] =
    movieData?.results.slice(indexOfFistMovie, indexOfLastMovie) || [];
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <Container>
      {movieLoading ? (
        <div>Loading...</div>
      ) : (
        <>
          <Inner>
            {currentMovies?.map((movie, index) => (
              <SearchMovieBox
                key={index}
                onClick={() => {
                  onSearchBoxClick(movie.id);
                }}
              >
                <div
                  className={
                    movie.backdrop_path
                      ? "search-movie-cover"
                      : "search-movie-cover not-available"
                  }
                >
                  {movie.backdrop_path ? (
                    <img
                      src={makeImagePath(movie.backdrop_path)}
                      alt={movie.original_title}
                    />
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                      />
                    </svg>
                  )}
                </div>
                <h3 className="search-movie-title">{movie.title}</h3>
              </SearchMovieBox>
            ))}
          </Inner>
          <StyledPagination>
            <Pagination
              onChange={handlePageChange}
              activePage={currentPage}
              itemsCountPerPage={moviesPerPage}
              totalItemsCount={movieData?.results.length || 0}
              pageRangeDisplayed={5}
            />
          </StyledPagination>
        </>
      )}
    </Container>
  );
};

export default Search;
