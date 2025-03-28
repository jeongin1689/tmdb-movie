console.log("interaction-js");

const observer = new MutationObserver((mutations, obs) => {
  const bannerTitle = document.querySelector(".banner-title");
  if (bannerTitle) {
    gsap.from(".banner-title", { 
      rotationY: 36, 
      opacity: 0, 
      duration: 0.8, 
      yPercent: 100, 
      stagger: 0.1, 
      ease: "Expo.easeOut", 
      onComplete: () => {
        gsap.to(".banner-desc", { 
          opacity: 1, 
          y: 0, 
          duration: 1
        });
      }
    });
    obs.disconnect();
  }
});
observer.observe(document.body, { childList: true, subtree: true });

// document.addEventListener("DOMContentLoaded", ()=> {
// 	console.log("원하는 코드 적기")
// });


const swiper = new Swiper(".swiper", {
  loop: true,
  loopAdditionalSlides: 1,
  slidesPerView: 4,
  spaceBetween: 20,
  parallax: true,
});
  