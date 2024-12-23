const API_KEY = `9d225e9b7320979a865e24a4c79106ea`;
const BASE_PATH = `https://api.themoviedb.org/3`;

// Movie Data Type
export interface Movie {
  id: number;
  backdrop_path: string;
  genre_ids: number[];
  poster_path: string;
  title: string;
  original_title: string;
  overview: string;
  vote_average: number;
  vote_count: number;
  release_date: string;
  adult: boolean;
}
export interface GetMoviesResult {
  dates: {
    maximum: string;
    minimum: string;
  };
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

export const getPopularMovies = () => {
  return fetch(
    `${BASE_PATH}/movie/popular?language=ko-kr&api_key=${API_KEY}`
  ).then((response) => response.json());
};

export const getNowPlayingMovies = () => {
  return fetch(
    `${BASE_PATH}/movie/now_playing?language=ko-kr&api_key=${API_KEY}`
  ).then((response) => response.json());
};

export const searchContents = (keyword: string | null) => {
  return fetch(
    `${BASE_PATH}/search/movie?language=ko-kr&api_key=${API_KEY}&query=${keyword}`
  ).then((response) => response.json());
};

export const searchGeneres = () => {
  return fetch(
    `${BASE_PATH}/genre/movie/list?language=ko-kr&api_key=${API_KEY}`
  ).then((response) => response.json());
};

export const getReviews = (movieId: number) => {
  return fetch(
    `${BASE_PATH}/movie/${movieId}/reviews?language=ko-kr&api_key=${API_KEY}`
  ).then((response) => response.json());
};

export const getVideos = (movieId: number) => {
  return fetch(
    `${BASE_PATH}/movie/${movieId}/videos?language=ko-kr&api_key=${API_KEY}`
  ).then((response) => response.json());
};
