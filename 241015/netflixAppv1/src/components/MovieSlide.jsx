// slide ul 역할
import React from "react";
import styled from "styled-components";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import MovieCard from "./MovieCard";

const Wrapper = styled.div`
  width: 100vw;
`;

const MovieSlide = ({ movies }) => {
  // console.log(movies);
  // undefined => 찾아오는 것과 출력이 동시에 진행되기 때문에 -> 로딩스피너로 제어

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <Wrapper>
      {movies && (
        <Carousel responsive={responsive}>
          {movies.results.map((item, index) => (
            <MovieCard key={index} item={item} />
          ))}
        </Carousel>
      )}
    </Wrapper>
  );
};

export default MovieSlide;
