const headerArea = document.querySelector(".header");
const bannerArea = document.querySelector(".banner-wrap");

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
    console.error("Error loading header:", error);
  }
}



function init(){
  loadHeader();
  loadBanner();
}
init();