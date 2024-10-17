import api from "../api";

const API_KEY = import.meta.env.VITE_API_KEY;

const getMovies = () => {
  return async (dispatch) => {
    try {
      // loading
      dispatch({
        type: "GET_MOVIES_REQUEST",
      });

      // api
      const popularMovieApi = api.get(
        `movie/popular?api_key=${API_KEY}&language=ko-KR&page=1`
      );
      const topRatedMovieApi = api.get(
        `movie/top_rated?api_key=${API_KEY}&language=ko-KR&page=1`
      );
      const upComingMovieApi = api.get(
        `movie/upcoming?api_key=${API_KEY}&language=ko-KR&page=1`
      );
      // genre
      const genreApi = api.get(
        `genre/movie/list?api_key=${API_KEY}&language=ko`
      );
      // console.log(genreApi);

      // 데이터 한번에 찾아오기
      const [popularMovie, topRatedMovie, upComingMovie, genreList] =
        await Promise.all([
          popularMovieApi,
          topRatedMovieApi,
          upComingMovieApi,
          genreApi,
        ]);
      // console.log(popularMovie, topRatedMovie, upComingMovie);
      // console.log(genreList.data.genres);

      dispatch({
        type: "GET_MOVIES_SUCCESS",
        payload: {
          popularMovie: popularMovie.data,
          topRatedMovie: topRatedMovie.data,
          upComingMovie: upComingMovie.data,
          genreList: genreList.data.genres,
          loading: true,
        },
      });
    } catch (error) {
      dispatch({
        type: "GET_MOVIES_FAILURE",
      });
    }
  };
};

export const movieAction = { getMovies };
