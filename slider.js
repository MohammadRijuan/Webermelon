document.addEventListener('DOMContentLoaded', () => {
  const track = document.querySelector('.slider-track');
  const cards = document.querySelectorAll('.test-card');
  const prev = document.querySelector('.prev');
  const next = document.querySelector('.next');
  const dotsContainer = document.querySelector('.slider-dots');

  let index = 0;
  let visibleCards = window.innerWidth <= 576 ? 1 : 2;
  let totalSlides = Math.ceil(cards.length / visibleCards);

  function createDots() {
    dotsContainer.innerHTML = '';
    totalSlides = Math.ceil(cards.length / visibleCards);
    for (let i = 0; i < totalSlides; i++) {
      const dot = document.createElement('button');
      if (i === 0) dot.classList.add('active');
      dotsContainer.appendChild(dot);

      dot.addEventListener('click', () => {
        index = i;
        updateSlide();
      });
    }
  }

  function updateSlide() {
    const cardWidth = cards[0].offsetWidth + 20; // card width + gap
    track.style.transform = `translateX(-${index * cardWidth * visibleCards}px)`;

    // Ensure mobile moves one card at a time
    if (window.innerWidth <= 576) {
      track.style.transform = `translateX(-${index * cardWidth}px)`;
    }

    // Update dots
    const dots = document.querySelectorAll('.slider-dots button');
    dots.forEach((d, i) => d.classList.toggle('active', i === index));
  }

  function nextSlide() {
    index = (index + 1) % totalSlides;
    updateSlide();
  }

  function prevSlide() {
    index = (index - 1 + totalSlides) % totalSlides;
    updateSlide();
  }

  next.addEventListener('click', nextSlide);
  prev.addEventListener('click', prevSlide);

  let autoSlide = setInterval(nextSlide, 4000);

  track.addEventListener('mouseenter', () => clearInterval(autoSlide));
  track.addEventListener('mouseleave', () => autoSlide = setInterval(nextSlide, 4000));

  window.addEventListener('resize', () => {
    visibleCards = window.innerWidth <= 576 ? 1 : 2;
    index = 0;
    createDots();
    updateSlide();
  });

  // Initial setup
  createDots();
  updateSlide();
});
