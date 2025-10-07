
  document.addEventListener('DOMContentLoaded', () => {
    const track = document.querySelector('.slider-track');
    const cards = document.querySelectorAll('.test-card');
    const prev = document.querySelector('.prev');
    const next = document.querySelector('.next');
    const dots = document.querySelectorAll('.slider-dots button');

    let index = 0;
    let visibleCards = window.innerWidth <= 768 ? 1 : 2;

    function updateSlide() {
      const cardWidth = cards[0].offsetWidth + 20; 
      track.style.transform = `translateX(-${index * cardWidth * visibleCards}px)`;
      dots.forEach((d, i) => d.classList.toggle('active', i === index));
    }

    function nextSlide() {
      index = (index + 1) % 3; 
      updateSlide();
    }

    function prevSlide() {
      index = (index - 1 + 3) % 3;
      updateSlide();
    }

    next.addEventListener('click', nextSlide);
    prev.addEventListener('click', prevSlide);

    dots.forEach((dot, i) => {
      dot.addEventListener('click', () => {
        index = i;
        updateSlide();
      });
    });

  
    let autoSlide = setInterval(nextSlide, 4000);


    track.addEventListener('mouseenter', () => clearInterval(autoSlide));
    track.addEventListener('mouseleave', () => autoSlide = setInterval(nextSlide, 4000));

  
    window.addEventListener('resize', () => {
      visibleCards = window.innerWidth <= 768 ? 1 : 2;
      index = 0;
      updateSlide();
    });
  });
