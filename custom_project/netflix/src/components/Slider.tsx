import { AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import styled from "styled-components";
import { motion } from "framer-motion";
import { makeImagePath } from "../utils";
import { useNavigate } from "react-router-dom";
import { GetMoviesResult } from "../api";

const Container = styled.div`
  width: 100%;
`;
const Box = styled(motion.div)`
  position: relative;
  width: 100%;
  height: 240px;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform: scale(1);
    transition: transform 0.3s ease-in-out;
  }
  &:hover {
    img {
      transform: scale(1.04);
    }
  }
`;

const Slider = ({ data }: { data: GetMoviesResult | undefined }) => {
  const history = useNavigate();

  const onBoxClick = (movieId: number) => {
    history(`/movies/${movieId}`);
  };

  return (
    <Container>
      <Swiper slidesPerView={6} spaceBetween={20} slidesPerGroup={6} navigation>
        {data?.results.map((movie) => (
          <SwiperSlide key={movie.id}>
            <Box onClick={() => onBoxClick(movie.id)}>
              <img
                src={makeImagePath(movie.poster_path || "")}
                alt={movie.title}
              />
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

export default Slider;
