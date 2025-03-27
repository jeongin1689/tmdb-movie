const bannerTitle = document.querySelector(".banner-title");
console.log(document.querySelector(".banner-title"));

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

const swiper = new Swiper(".swiper", {
  loop: true,
  loopAdditionalSlides: 1,
  slidesPerView: 4,
  spaceBetween: 20,
  parallax: true,
});
  