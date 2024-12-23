import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useNavigate, useMatch, PathMatch } from "react-router-dom";
import styled from "styled-components";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import { getNowPlayingMovies, GetMoviesResult, getPopularMovies } from "../api";
import { makeImagePath } from "../utils";
import Slider from "../components/Slider";
import Banner from "../components/Banner";
import Modal from "../components/Modal";

// Styled
const Container = styled.main`
  width: 100%;
  height: 3000px;
  /* margin-top: 60px; */
  background: ${({ theme }) => theme.black.darker};
  overflow-x: hidden;
`;
const Inner = styled.section`
  width: var(--inner-width);
  margin: 0 auto;
  position: relative;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, -100%);
    width: 100vw;
    height: 100px;
    border-top-left-radius: 50% 100%;
    border-top-right-radius: 50% 100%;
    border-bottom: none;
    background: radial-gradient(
        50% 500% at 50% -420%,
        rgba(24, 24, 24, 0.4) 80%,
        rgba(0, 0, 0, 0.1) 100%
      ),
      #181818;
  }
`;
const SliderContent = styled.article`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 60px 0;
`;
const Loader = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.red};
  font-size: 22px;
`;

const Home = () => {
  // Modal

  // console.log(movieMatch);

  // Get Data
  const { data: nowPlayingData, isLoading: nowPlayingLoading } =
    useQuery<GetMoviesResult>({
      queryKey: ["nowPlaying"],
      queryFn: getNowPlayingMovies,
    });
  const { data: popularData, isLoading: popularLoading } =
    useQuery<GetMoviesResult>({
      queryKey: ["popular"],
      queryFn: getPopularMovies,
    });
  // console.log(data, isLoading);

  return (
    <Container>
      {nowPlayingLoading ? (
        <Loader>Loading...</Loader>
      ) : (
        <>
          <Banner data={popularData} />
          <Inner>
            <SliderContent>
              <h4>지금 뜨는 영화</h4>
              <Slider data={popularData} />
            </SliderContent>
            <Slider data={nowPlayingData} />
            <Modal data={popularData} />
          </Inner>
        </>
      )}
    </Container>
  );
};

export default Home;
