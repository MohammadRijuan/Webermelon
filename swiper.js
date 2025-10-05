const track = document.querySelector(".swiper-track");
let offset = 0;
const speed = 1; 

function autoSlide() {
  offset -= speed;
  if (Math.abs(offset) >= track.scrollWidth / 2) {
    offset = 0; 
  }
  track.style.transform = `translateX(${offset}px)`;
  requestAnimationFrame(autoSlide);
}

autoSlide();
