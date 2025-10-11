document.addEventListener("DOMContentLoaded", () => {
  const swiper = new Swiper(".slider-container", {
    loop: true,
    grabCursor: true,
    spaceBetween: 30,
      // autoHeight: true, 

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: false, 
    },
    

    // autoplay: {
    //   delay: 4000, 
    //   disableOnInteraction: false, 
    //   pauseOnMouseEnter: true,
    // },

    slidesPerGroup: 2, 
    
    breakpoints: {
      0: {
        slidesPerView: 1,
        slidesPerGroup: 1,
      },
      577: {
        slidesPerView: 2,
        slidesPerGroup: 2,
      },
      1024: {
        slidesPerView: 2,
        slidesPerGroup: 2,
      },
      1440: {
        slidesPerView: 2,
        slidesPerGroup: 2,
      },
    },
  });
});