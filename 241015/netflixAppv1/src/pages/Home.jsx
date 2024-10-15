import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { movieAction } from "../redux/actions/movieAction";
import Banner from "../components/Banner";

const Home = () => {
  const dispatch = useDispatch();

  const { popularMovie, topRatedMovieApi, upComingMovieApi } = useSelector(
    (state) => state.movie
  );
  // console.log(popularMovie, topRatedMovieApi, upComingMovieApi);

  useEffect(() => {
    dispatch(movieAction.getMovies());
  }, []);

  return (
    <div>
      {popularMovie.results && <Banner movie={popularMovie.results[0]} />}
    </div>
  );
};

export default Home;
