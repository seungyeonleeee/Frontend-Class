// slide li 역할
import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { Badge } from "react-bootstrap";

const Wrapper = styled.div`
  position: relative;
  width: 300px;
  height: 200px;
  cursor: pointer;
`;
const Overlay = styled.div`
  /* width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  position: absolute;
  top: 0;
  left: 0;
  border: 1px solid #f00;
  z-index: 1; */
`;
const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const Title = styled.h1`
  width: 100%;
  position: absolute;
  top: 22px;
  left: 10px;
  font-size: 20px;
`;
const Adult = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  background: rgba(220, 20, 60, 0.8);
  width: 50px;
  height: 50px;
  line-height: 50px;
  border-radius: 50%;
  text-align: center;
  font-size: 14px;
  box-shadow: 4px 8px 8px rgba(0, 0, 0, 0.3);
`;
const InfoGroup = styled.div`
  width: 100%;
  position: absolute;
  bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  padding: 0 10px;
`;
const Genre = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;
const Vote = styled.span``;

const MovieCard = ({ item }) => {
  // console.log(item);

  // genre
  const { genreList } = useSelector((state) => state.movie);
  // console.log(genreList);

  return (
    <Wrapper>
      <Img
        src={`https://media.themoviedb.org/t/p/original/${item.backdrop_path}`}
        alt="thumbnail"
      />
      <Title>{item.title}</Title>
      <Adult>{item.adult ? "성인" : "전체"}</Adult>
      <InfoGroup>
        <Genre>
          {item.genre_ids.map((id, index) => (
            <Badge key={index}>
              {genreList.find((item) => item.id === id).name}
            </Badge>
          ))}
        </Genre>
        <Vote>{item.vote_average}</Vote>
      </InfoGroup>
    </Wrapper>
  );
};

export default MovieCard;
