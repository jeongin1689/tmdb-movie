import config from "./config.js";
const { TMDB_API_KEY } = config;
const TMDB_TOP_RATED_URL = `https://api.themoviedb.org/3/movie/top_rated?api_key=${TMDB_API_KEY}&language=ko-KR"`;
const TMDB_POPULAR_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${TMDB_API_KEY}&language=ko-KR"`;

const movieArea = document.querySelector(".movie-area");

// function getPopularTmdb() {
//   const movieWrap = document.createElement("div");
//   movieWrap.setAttribute("class","movie-wrap");
//   const wrap = document/

//   movieWrap.innerHTML = `<h1>dddd</h1>`;


// }

function getTopRatedTmdb() {
  fetch(TMDB_TOP_RATED_URL)
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
        let trimmedAverage = trimAverage(movieVoteAverage);

        let movieInfo = document.createElement('div');
        movieInfo.setAttribute("class","movie-info swiper-slide");
        movieInfo.innerHTML = `
          <div class="img-box">
            <img src="https://image.tmdb.org/t/p/w300/${moviePoster}" alt="${movieTitle}">
          </div>
          <span class="movie-name">${movieTitle}</span>
          <strong class="original-name">(${movieOgTitle})</strong>
          <span class="movie-release-date">개봉일: ${movieReleaseDate}</span>
          <span class="movie-vote-average">평점: ${trimmedAverage}</span>
        `
        movieArea.appendChild(movieInfo);
      }
    }
  })
  .catch(error => console.log('error', error));
  return;
}

function trimAverage(voteAverage){
  const averageResult = voteAverage.toFixed(1);

  return averageResult;
}

function init() {
  getTopRatedTmdb();
  // getPopularTmdb();
}
init();