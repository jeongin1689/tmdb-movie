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
  });
  return;
}

function trimAverage(voteAverage){
  const averageResult = voteAverage.toFixed(1);

  return averageResult;
}

function initSwiper(){
  const swiper = new Swiper(".swiper", {
    loop: true,
    loopAdditionalSlides: 1,
    slidesPerView: 4,
    spaceBetween: 20,
    parallax: true,
  });
}



function init() {
  getTmdb();
  initSwiper();
}
init();