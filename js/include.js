console.log("include-js");

const headerArea = document.querySelector(".header");
const bannerArea = document.querySelector(".banner-wrap");
const movieCardArea = document.querySelector(".movie-wrap");

async function loadHeader() {
  if (!headerArea) {
    console.error("Error: .header 요소를 찾을 수 없어요.");
    return;
  }

  try {
    const response = await fetch("../views/header.html");

    const html = await response.text();
    headerArea.innerHTML = html;
  } catch (error) {
    console.error("Error loading header:", error);
  }
}

async function loadBanner() {
  if (!bannerArea) {
    console.error("Error: .banner 요소 찾을 수 없어요.");
    return;
  }

  try {
    const response = await fetch("../views/banner.html");

    const html = await response.text();
    bannerArea.innerHTML = html;
  } catch (error) {
    console.error("Error loading banner:", error);
  }
}

async function loadMovieCard() {
  const movieCardArea = document.querySelector(".movie-wrap"); // `.movie-wrap` 요소 확인

  if (!movieCardArea) {
    console.error("Error: .movie-wrap 요소 찾을 수 없어요.");
    return;
  }

  try {
    console.log("loadMovie => 호출 성공");
    const response = await fetch("../views/movie-info.html");
    const html = await response.text();

    movieCardArea.innerHTML = html;

    if (window.getTopRatedTmdb) {
      window.getTopRatedTmdb();
    } else {
      console.error("Error: getTopRatedTmdb()를 찾을 수 없습니다.");
    }
  } catch (error) {
    console.error("Error loading movie:", error);
  }
}

function init() {
  loadHeader();
  loadBanner();
  loadMovieCard();
}

init();



function init(){
  loadHeader();
  loadBanner();
  loadMovieCard();
}
init();