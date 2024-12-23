import { AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { makeImagePath } from "../utils";
import { useNavigate } from "react-router-dom";
import { GetMoviesResult } from "../api";

const Container = styled.div`
  width: 100%;
`;
const Row = styled(motion.div)`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 10px;
`;
const Box = styled(motion.div)<{ $bgPhoto: string | undefined }>`
  position: relative;
  width: 150px;
  height: 225px;
  background: url(${(props) => props.$bgPhoto}) center/cover no-repeat;
  font-size: 22px;
  cursor: pointer;
  &:first-child {
    transform-origin: center left;
  }
  &:last-child {
    transform-origin: center right;
  }
  &:hover {
    z-index: 2;
  }
`;
const Info = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 20px;
  background: rgba(0, 0, 0, 0.5);
  opacity: 0;
  h4 {
    color: ${({ theme }) => theme.white.lighter};
    text-align: center;
    font-size: 16px;
  }
`;

// Motion Variants
const rowVariants = {
  hidden: {
    x: window.innerWidth + 10,
  },
  visible: {
    x: 0,
  },
  exit: {
    x: -window.innerWidth - 10,
  },
};
const boxVariants = {
  normal: {},
  hover: {
    scale: 1.2,
    y: -40,
    transition: {
      delay: 0.5,
      type: "tween",
    },
  },
};
const infoVariants = {
  hover: {
    opacity: 0.8,
    transition: {
      delay: 0.3,
      type: "tween",
    },
  },
};

// Pagenation
const offset = 6; // 한페이지에 보일 슬라이드 개수

const Slider = ({ data }: { data: GetMoviesResult | undefined }) => {
  const history = useNavigate();

  // Slide State
  const [index, setIndex] = useState(0);
  const [leaving, setLeaving] = useState(false);
  const toggleLeaving = () => setLeaving((prev: boolean) => !prev);

  // Click Modal
  const onBoxClick = (movieId: number) => {
    history(`/movies/${movieId}`);
  };

  return (
    <Container>
      <AnimatePresence initial={false} onExitComplete={toggleLeaving}>
        <Row
          initial="hidden"
          animate="visible"
          exit="exit"
          transition={{ type: "tween", duration: 1 }}
          variants={rowVariants}
          key={index}
        >
          {data?.results
            .slice(0)
            .slice(index * offset, index * offset + offset)
            .map((movie) => (
              <Box
                onClick={() => onBoxClick(movie.id)}
                key={movie.id}
                layoutId={movie.id + ""}
                // layoutId는 문자만 가능
                variants={boxVariants}
                $bgPhoto={makeImagePath(movie.poster_path || "")}
                whileHover="hover"
              >
                <Info variants={infoVariants}>
                  <h4>{movie.title}</h4>
                </Info>
              </Box>
            ))}
          {/* 2번부터 끝까지 찾아오기(18개로 맞추려고), index = page */}
        </Row>
      </AnimatePresence>
    </Container>
  );
};

export default Slider;
