import { AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import styled from "styled-components";
import { motion } from "framer-motion";
import { makeImagePath } from "../utils";
import { useNavigate } from "react-router-dom";
import { GetMoviesResult } from "../api";
import Modal from "./Modal";

const Container = styled.div`
  width: 100%;
  .swiper-button-prev,
  .swiper-button-next {
    width: 28px;
    height: 48px;
    border-radius: 5px;
    color: ${({ theme }) => theme.white.lighter};
    background: rgba(0, 0, 0, 0.8);
    transition: all 0.3s;
    &::after {
      font-size: 1.5rem;
    }
    &:hover {
      background: ${({ theme }) => theme.white.lighter};
      color: ${({ theme }) => theme.black.darker};
    }
  }
  .swiper-button-prev {
    left: 5px;
  }
  .swiper-button-next {
    right: 5px;
  }
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
      <Swiper
        modules={[Navigation]}
        slidesPerView={6}
        spaceBetween={20}
        slidesPerGroup={6}
        navigation
      >
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
      <Modal data={data} />
    </Container>
  );
};

export default Slider;
