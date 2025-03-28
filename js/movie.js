console.log("movie-js");

import config from "./config.js";
const { TMDB_API_KEY } = config;
const TMDB_TOP_RATED_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${TMDB_API_KEY}&language=ko-KR"`;
const TMDB_POPULAR_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${TMDB_API_KEY}&language=ko-KR"`;


function getTopRatedTmdb() {
  const movieCard = document.querySelector(".movie-area");

  if (!movieCard) {
    console.error("Error: .movie-area 요소를 찾을 수 없습니다.");
    return;
  }

  console.log(movieCard);
  const originalMovieCard = movieCard.innerHTML;
  let repeatMovieCard = "";

  fetch(TMDB_TOP_RATED_URL)
    .then(response => response.json()) 
    .then(json => {
      if (json && json.results) {
        json.results.forEach(movie => {
          let moviePoster = movie.poster_path;
          let movieTitle = movie.title;
          let movieOgTitle = movie.original_title;
          let movieReleaseDate = movie.release_date;
          let movieVoteAverage = movie.vote_average;
          let trimmedAverage = trimAverage(movieVoteAverage);

          let newMovieCard = originalMovieCard
            .replace('<img src="https://image.tmdb.org/t/p/w300/" alt="">', `<img src="https://image.tmdb.org/t/p/w300/${moviePoster}" alt="${moviePoster}">`)
            .replace('<span class="movie-name"></span>', `<span class="movie-name">${movieTitle}</span>`)
            .replace('<strong class="original-name"></strong>', `<strong class="original-name">${movieOgTitle}</strong>`)
            .replace('<span class="movie-release-date">개봉일: </span>', `<span class="movie-release-date">개봉일: ${movieReleaseDate}</span>`)
            .replace('<span class="movie-vote-average">평점: </span>', `<span class="movie-vote-average">평점: ${trimmedAverage}</span>`);

          repeatMovieCard += newMovieCard;
        });

        movieCard.innerHTML = repeatMovieCard;
      }
    })
    .catch(error => console.error('데이터 불러오기 오류:', error));
}
window.getTopRatedTmdb = getTopRatedTmdb;

function trimAverage(voteAverage){
  const averageResult = voteAverage.toFixed(1);

  return averageResult;
}