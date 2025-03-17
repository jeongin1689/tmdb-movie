import config from "./config.js";
const { TMDB_API_KEY } = config;
const TMDB_URL = `https://api.themoviedb.org/3/movie/top_rated?api_key=${TMDB_API_KEY}&language=ko-KR"`;

const movieArea = document.querySelector(".movie-area");

function getTmdb() {
  fetch(TMDB_URL)
  .then(response => response.json())
  .then(json => {
    const tmdb = json;
    console.log(tmdb);
    if(tmdb){
      for( let i = 0; i < tmdb.results.length; i++ ){
        let movieOverview = tmdb.results[i].overview;
        let movieTitle = tmdb.results[i].title;
        let movieOgTitle = tmdb.results[i].original_title;
        let movieReleaseDate = tmdb.results[i].release_date;
        let movieVoteAverage = tmdb.results[i].vote_average;
        let moviePoster = tmdb.results[i].poster_path;

        let movieInfo = document.createElement('div');
        movieInfo.setAttribute("class","movie-info");
        movieInfo.innerHTML = `
          <div class="img-box">
            <img src="https://image.tmdb.org/t/p/w300/${moviePoster}" alt="${movieTitle}">
          </div>
          <span class="movie-name">${movieTitle} <strong class="original-name">${movieOgTitle}</strong></span>
          <span class="movie-overview">${movieOverview}</span>
          <span class="movie-release-date">${movieReleaseDate}</span>
          <span class="movie-vote-average">${movieVoteAverage}</span>
        `
        movieArea.appendChild(movieInfo);
      }
    }
  });
  return;
}
getTmdb();