import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import {
  searchContents,
  GetMoviesResult,
  searchGeneres,
  getReviews,
  getVideos,
  Movie,
} from "../api";
import { makeImagePath } from "../utils";
import YouTube from "react-youtube";
import Pagination from "react-js-pagination";

// Styled
const Container = styled.div`
  width: 100%;
  margin-top: 60px;
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
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px 0;
  padding: 20px;
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

// Type
interface GenresItem {
  id: number;
  name: string;
}
export interface ReviewContents {
  author: string;
  author_details: {
    name: string;
    username: string;
    avatar_path: string;
    rating: number;
  };
  content: string;
  created_at: string;
  id: string;
  updated_at: string;
  url: string;
}
interface VideoContents<T> {
  [key: number]: T[];
}

const Search = () => {
  const [videos, setVideos] = useState<VideoContents<string>>({});

  // Search Keyword 가져오기
  const { search } = useLocation();
  // console.log(search); // search: "?keyword=keyword"
  // 방법 1
  // const key = search.split("=")[1];
  // console.log(key);
  // 방법 2
  const keyword = new URLSearchParams(search).get("keyword");
  // console.log(keyword);

  // const contents = searchContents(keyword);
  // console.log(contents);

  const { data: movieData, isLoading: movieLoading } =
    useQuery<GetMoviesResult>({
      queryKey: ["multiContents", keyword],
      queryFn: () => searchContents(keyword),
    });

  // Generes
  const { data: genereData, isLoading: genereLoading } = useQuery({
    queryKey: ["getGeneres"],
    queryFn: searchGeneres,
  });
  // console.log(movieData, genereData);

  // Review
  const ids = movieData?.results.map((movie) => movie.id);
  const { data: reviewData, isLoading: reviewLoading } = useQuery({
    queryKey: ["getReview", ids],
    queryFn: () =>
      ids ? Promise.all(ids.map((id) => getReviews(id))) : Promise.resolve([]),
    // Promise.all() : 복수의 await가 있을 때 정상적으로 들어오면 실행
    enabled: !!ids, // 옵션값 ids가 있을 때만 queryFn 실행하라
  });
  // console.log(reviewData);

  // Video
  const { data: videoData, isLoading: videoLoading } = useQuery({
    queryKey: ["getVideos", ids],
    queryFn: () =>
      ids ? Promise.all(ids.map((id) => getVideos(id))) : Promise.resolve([]),
    enabled: !!ids,
  });
  // console.log(videoData);

  useEffect(() => {
    if (movieData && videoData) {
      movieData.results.forEach((movie) => {
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
  }, [movieData, videoData]);

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [moviesPerPage, setMoviesPerPage] = useState(2);
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
          {currentMovies?.map((movie, index) => (
            <SearchBox key={index}>
              <MovieSection>
                {movie.backdrop_path ? (
                  <MovieImg
                    src={makeImagePath(movie.backdrop_path)}
                    alt="movieImg"
                  />
                ) : (
                  <ImgBox>Ready for Imgaes</ImgBox>
                )}

                <MovieInfo>
                  <MovieTitle>{movie.original_title}</MovieTitle>
                  <MovieOverview>{movie.overview}</MovieOverview>
                  <MovieDate>
                    <span>Release : {movie.release_date}</span>
                  </MovieDate>
                  <MovieRate>
                    <span>Rate : {movie.vote_average?.toFixed(2)}</span>
                  </MovieRate>
                  <RateNumbers>
                    <span>
                      Members : {movie.vote_count?.toLocaleString("ko-kr")}
                    </span>
                  </RateNumbers>
                  <MovieValue>{movie.adult ? "18+" : "ALL"}</MovieValue>
                  <Ganres>
                    {movie.genre_ids
                      .map(
                        (id) =>
                          genereData?.genres.find(
                            (item: GenresItem) => item.id === id
                          ).name
                      )
                      .join(", ")}
                  </Ganres>
                </MovieInfo>
              </MovieSection>
              <ReviewSection>
                <h3>Movie Reviews</h3>
                {reviewLoading ? (
                  <div>Review Loading...</div>
                ) : (
                  <ul>
                    {reviewData && reviewData[index].results.length > 0 ? (
                      reviewData[index].results.map(
                        (review: ReviewContents) => (
                          <li key={review.id}>
                            <ReviewAuthor>{review.author}</ReviewAuthor>
                            <ReviewContent>{review.content}</ReviewContent>
                          </li>
                        )
                      )
                    ) : (
                      <li>No Reviews</li>
                    )}
                  </ul>
                )}
              </ReviewSection>
              <VideoSection>
                {videos[movie.id]?.length > 0 ? (
                  <YouTube
                    videoId={videos[movie.id][0]}
                    opts={{ width: "100%", height: "800px" }}
                  />
                ) : (
                  <div>Not Available</div>
                )}
              </VideoSection>
            </SearchBox>
          ))}
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
