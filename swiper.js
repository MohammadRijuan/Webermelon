// const track = document.querySelector(".swiper-track");
// let offset = 0;
// const speed = 1; // pixels per frame

// // get total width of track / 2 (because you duplicated items)
// const resetWidth = track.scrollWidth / 2;

// function autoSlide() {
//   offset -= speed;

//   if (Math.abs(offset) >= resetWidth) {
//     offset = 0; // reset when half of the track has scrolled
//   }

//   track.style.transform = `translateX(${offset}px)`;
//   requestAnimationFrame(autoSlide);
// }

// autoSlide();