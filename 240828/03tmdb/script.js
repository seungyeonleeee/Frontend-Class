// 1.
import api from "./env.js";
// import {API_KEY} from "./env.js";

// 2.
const url = `https://api.themoviedb.org/3/movie/popular?api_key=${api.API_KEY}&language=ko&page=1`;

// 10.
const movieDetail = (e) => {
  // id값을 찾아야 함
  // console.log(e.target.parentElement.id);
  // 구조분해할당
  const { id } = e.target.parentElement;
  // console.log(id);

  const detailURL = `https://www.themoviedb.org/movie/${id}`;

  window.open(detailURL, "_blank");
};

// 5.
const createBlock = ({
  id,
  poster_path,
  original_title,
  title,
  vote_average,
  release_date,
}) => {
  // 7.
  // 구조분해할당

  // 6.
  // console.log(movie);

  // 8.
  const parent = document.querySelector(".contents");
  const movie = document.createElement("article");
  const poster = document.createElement("img");
  const detail = document.createElement("div");
  const info = document.createElement("div");
  const h3 = document.createElement("h3");
  const date = document.createElement("div");
  const rate = document.createElement("div");

  movie.className = "movie";
  detail.className = "detail";
  info.className = "info";
  date.className = "date";
  rate.className = "rate";

  movie.id = id;
  poster.src = `https://image.tmdb.org/t/p/original/${poster_path}`;
  h3.innerText = `${title} (${original_title})`;
  date.innerText = release_date;
  rate.innerText = `⭐⭐⭐ ${vote_average}`;

  info.append(date, rate);
  detail.append(info, h3);
  movie.append(poster, detail);
  parent.append(movie);

  // 9.
  poster.addEventListener("click", movieDetail);
};

// 3.
fetch(url)
  .then((response) => response.json())
  .then(({ results }) =>
    // { results } => 구조분해할당
    {
      // console.log(results);

      // 4.
      results.forEach((movie) => {
        createBlock(movie);
      });
    }
  );
