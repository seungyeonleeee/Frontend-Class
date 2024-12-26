import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useNavigate, useMatch, PathMatch } from "react-router-dom";
import styled from "styled-components";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import {
  getNowPlayingMovies,
  GetMoviesResult,
  getPopularMovies,
  getTopRatedMovies,
  getUpcomingMovies,
} from "../api";
import { makeImagePath } from "../utils";
import Slider from "../components/Slider";
import Banner from "../components/Banner";
import Modal from "../components/Modal";

// Styled
const Container = styled.main`
  width: 100%;
  height: 3000px;
  /* margin-top: 60px; */
  background: ${({ theme }) => theme.black.darkest};
  overflow-x: hidden;
`;
const Inner = styled.section`
  width: var(--inner-width);
  margin: 0 auto;
`;
const SliderContent = styled.article`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 60px 0;
  h4 {
    color: ${({ theme }) => theme.white.lighter};
    font-size: 2.4rem;
    font-weight: 700;
  }
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
  const { data: popularData, isLoading: popularLoading } =
    useQuery<GetMoviesResult>({
      queryKey: ["popular"],
      queryFn: getPopularMovies,
    });
  const { data: nowPlayingData, isLoading: nowPlayingLoading } =
    useQuery<GetMoviesResult>({
      queryKey: ["nowPlaying"],
      queryFn: getNowPlayingMovies,
    });
  const { data: topRatedData, isLoading: topRatedLoading } =
    useQuery<GetMoviesResult>({
      queryKey: ["topRated"],
      queryFn: getTopRatedMovies,
    });
  const { data: upcomingData, isLoading: upcomingLoading } =
    useQuery<GetMoviesResult>({
      queryKey: ["upcoming"],
      queryFn: getUpcomingMovies,
    });

  // console.log(data, isLoading);

  return (
    <Container>
      {nowPlayingLoading ? (
        <Loader>Loading...</Loader>
      ) : (
        <>
          <Banner data={nowPlayingData} />
          <Inner>
            <SliderContent>
              <h4>지금 뜨는 영화</h4>
              <Slider data={popularData} />
            </SliderContent>
            <SliderContent>
              <h4>현재 상영 중인 영화</h4>
              <Slider data={nowPlayingData} />
            </SliderContent>
            <SliderContent>
              <h4>평점 높은 영화</h4>
              <Slider data={topRatedData} />
            </SliderContent>
            <SliderContent>
              <h4>개봉 예정 영화</h4>
              <Slider data={upcomingData} />
            </SliderContent>
          </Inner>
        </>
      )}
    </Container>
  );
};

export default Home;
