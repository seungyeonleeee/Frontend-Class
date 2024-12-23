import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { makeImagePath } from "../utils";
import { GetMoviesResult } from "../api";
import { useNavigate } from "react-router-dom";

const Container = styled(motion.section)<{ $bgPhoto: string | undefined }>`
  color: ${({ theme }) => theme.white.darker};
  height: calc(100vh - 80px);
  padding: 0 60px;
  background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 1),
      transparent,
      rgba(0, 0, 0, 1)
    ),
    url(${(props) => props.$bgPhoto}) center/cover no-repeat;
  transition: all 1s ease-in-out;
  cursor: pointer;
`;
const Inner = styled.article`
  width: var(--inner-width);
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
`;
const Title = styled(motion.h2)`
  font-size: 68px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`;
const Overview = styled(motion.p)`
  width: 60%;
  font-size: 18px;
  word-break: keep-all;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`;

const ContainerVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};

const textVariants = {
  initial: {
    opacity: 0,
    x: -50,
  },
  animate: {
    opacity: 1,
    x: 0,
  },
};

const Banner = ({ data }: { data: GetMoviesResult | undefined }) => {
  const navigate = useNavigate();
  const [randomMovie, setRandomMovie] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (data?.results) {
        const randomIndex = Math.floor(Math.random() * data.results.length);
        setRandomMovie(randomIndex);
      }
    }, 8000);

    return () => clearInterval(interval);
  }, [data]);

  const onBannerClick = () => {
    if (data?.results[randomMovie]) {
      navigate(`/movies/${data.results[randomMovie].id}`);
    }
  };

  return (
    <Container
      onClick={onBannerClick}
      variants={ContainerVariants}
      initial="initial"
      animate="animate"
      key={randomMovie}
      $bgPhoto={makeImagePath(data?.results[randomMovie]?.backdrop_path || "")}
    >
      <Inner>
        <Title
          variants={textVariants}
          initial="initial"
          animate="animate"
          transition={{
            duration: 0.8,
            delay: 0.2,
          }}
        >
          {data?.results[randomMovie]?.original_title}
        </Title>
        <Overview
          variants={textVariants}
          initial="initial"
          animate="animate"
          transition={{
            duration: 0.8,
            delay: 0.4,
          }}
        >
          {data?.results[randomMovie]?.overview}
        </Overview>
      </Inner>
    </Container>
  );
};

export default React.memo(Banner);
