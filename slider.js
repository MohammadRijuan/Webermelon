const track = document.querySelector(".slider-track");
const slides = document.querySelectorAll(".test-card");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let currentIndex = 0; // track which "set" we are on
let visibleCards = 2; // we want 2 cards visible

function updateSlide() {
  const offset = -(currentIndex * (100 / visibleCards));
  track.style.transform = translateX(${offset}%);
}

nextBtn.addEventListener("click", () => {
  if (currentIndex < slides.length - visibleCards) {
    currentIndex++;
  } else {
    currentIndex = 0; 
  }
  updateSlide();
});

prevBtn.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = slides.length - visibleCards;
  }
  updateSlide();
});


setInterval(() => {
  if (currentIndex < slides.length - visibleCards) {
    currentIndex++;
  } else {
    currentIndex = 0;
  }
  updateSlide();
}, 4000);