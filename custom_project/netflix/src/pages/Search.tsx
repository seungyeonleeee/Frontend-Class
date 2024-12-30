import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import {
  searchContentsMovies,
  searchContentsSeries,
  GetMoviesResult,
  Movie,
  GetSeriesResult,
  Series,
} from "../api";
import { makeImagePath } from "../utils";
import Pagination from "react-js-pagination";
import { useSetRecoilState } from "recoil";
import { isModalAtom } from "../atoms";
import { isMovie, getTitle } from "../utils/contentTypeChecker";

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

  // Contents Data
  const { data: movieData, isLoading: movieLoading } =
    useQuery<GetMoviesResult>({
      queryKey: ["movies", keyword],
      queryFn: () => searchContentsMovies(keyword),
    });
  const { data: seriesData, isLoading: seriesLoading } =
    useQuery<GetSeriesResult>({
      queryKey: ["series", keyword],
      queryFn: () => searchContentsSeries(keyword),
    });
  const contentsData = {
    results: [...(movieData?.results || []), ...(seriesData?.results || [])],
  };
  const contentsLoading = movieLoading || seriesLoading;

  // Modal Open
  const onSearchBoxClick = (dataId: number) => {
    setModal({
      dataId,
      data: contentsData as GetMoviesResult | GetSeriesResult,
    });
  };

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [moviesPerPage, setMoviesPerPage] = useState(8);
  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFistMovie = indexOfLastMovie - moviesPerPage;
  const currentContents: (Movie | Series)[] =
    contentsData?.results.slice(indexOfFistMovie, indexOfLastMovie) || [];
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <Container>
      {contentsLoading ? (
        <div>Loading...</div>
      ) : (
        <>
          <Inner>
            {currentContents?.map((content, index) => (
              <SearchMovieBox
                key={index}
                onClick={() => {
                  onSearchBoxClick(content.id);
                }}
              >
                <div
                  className={
                    content.backdrop_path
                      ? "search-movie-cover"
                      : "search-movie-cover not-available"
                  }
                >
                  {content.backdrop_path ? (
                    <img
                      src={makeImagePath(content.backdrop_path)}
                      alt={getTitle(content)}
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
                <h3 className="search-movie-title">{getTitle(content)}</h3>
              </SearchMovieBox>
            ))}
          </Inner>
          <StyledPagination>
            <Pagination
              onChange={handlePageChange}
              activePage={currentPage}
              itemsCountPerPage={moviesPerPage}
              totalItemsCount={contentsData?.results.length || 0}
              pageRangeDisplayed={5}
            />
          </StyledPagination>
        </>
      )}
    </Container>
  );
};

export default Search;
