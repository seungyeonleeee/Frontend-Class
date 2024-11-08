import { useQuery } from "@tanstack/react-query";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { searchContents, GetMoviesResult, searchGeneres } from "../api";
import { makeImagePath } from "../utils";

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

const Search = () => {
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

  const { data, isLoading } = useQuery<GetMoviesResult>({
    queryKey: ["multiContents", keyword],
    queryFn: () => searchContents(keyword),
  });

  // Generes
  const { data: genereData, isLoading: genereLoading } = useQuery({
    queryKey: ["getGeneres"],
    queryFn: searchGeneres,
  });

  return (
    <Container>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <>
          {data?.results.map((movie, index) => (
            <SearchBox key={index}>
              <MovieSection>
                <MovieImg
                  src={makeImagePath(movie.backdrop_path)}
                  alt="movieImg"
                />
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
                    {" "}
                    <span>
                      Members : {movie.vote_count?.toLocaleString("ko-kr")}
                    </span>
                  </RateNumbers>
                  <MovieValue>{movie.adult ? "18+" : "ALL"}</MovieValue>
                </MovieInfo>
              </MovieSection>
            </SearchBox>
          ))}
        </>
      )}
    </Container>
  );
};

export default Search;
