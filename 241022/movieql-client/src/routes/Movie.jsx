import React from "react";
import { useParams } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";
import styled from "styled-components";

// Styled
const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: linear-gradient(-45deg, #d754ab, #fd723a);
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ItemGroup = styled.div`
  width: 50vw;
  display: flex;
  gap: 20px;
`;
const Column = styled.div`
  flex: 1;
  /* text-align: center; */
`;
const Loading = styled.div`
  width: 100%;
  text-align: center;
  font-size: 18px;
  margin-top: 20vh;
`;
const Title = styled.h1`
  font-size: 60px;
  font-weight: 600;
`;
const SubTitle = styled.h4`
  font-size: 35px;
  margin: 15px 0 20px;
`;
const Button = styled.button`
  padding: 10px 16px;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
`;
const Description = styled.p`
  font-size: 22px;
  line-height: 1.2;
`;
const Image = styled.div`
  flex: 1;
  height: 700px;
  background: url(${(props) => props.bg}) center top/cover no-repeat;
  border-radius: 8px;
`;

const GET_MOVIE = gql`
  query getMovie($movieId: String!) {
    movie(id: $movieId) {
      id
      title
      rating
      large_cover_image
      isLiked @client
    }
  }
`;
// @client => Cache에서만 작동 (local only field data)

const Movie = () => {
  const { id } = useParams();
  // console.log(params);

  const {
    data,
    loading,
    client: { cache },
  } = useQuery(GET_MOVIE, {
    variables: {
      movieId: id,
    },
  });
  // console.log(result);

  const onClick = () => {
    cache.writeFragment({
      id: `Movie:${id}`,
      fragment: gql`
        fragment MovieFragment on Movie {
          isLiked
        }
      `,
      data: {
        isLiked: !data.movie.isLiked,
      },
    });
    // writeFragment() : 캐시의 값을 제어
  };

  if (loading) {
    return <Loading>Loading...</Loading>;
  }

  return (
    <Container>
      <ItemGroup>
        <Column>
          <Title>{data.movie.title}</Title>
          <SubTitle>⭐ {data.movie.rating}</SubTitle>
          <Button onClick={onClick}>
            💛 {data.movie.isLiked ? "Unlike" : "Like"}
          </Button>
          <Description>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea maxime
            accusamus sed iusto saepe. Molestiae ipsa dolorem quisquam tempore
            neque unde ab optio, soluta consequuntur, cumque sint. Cupiditate,
            sunt deserunt! Unde fuga nam rem architecto enim itaque, nisi quo
            deleniti facere, aperiam quisquam hic obcaecati nobis eaque earum
            veniam? Impedit necessitatibus nam recusandae fuga mollitia vel
            repellendus, velit blanditiis? Nobis?
          </Description>
        </Column>
        <Image bg={data.movie.large_cover_image} />
      </ItemGroup>
    </Container>
  );
};

export default Movie;
