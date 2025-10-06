const counters = document.querySelectorAll('.co h1');

counters.forEach(counter => {
  const updateCount = () => {
    const target = +counter.getAttribute('data-target'); // target number
    const span = counter.querySelector('.c');
    let count = +counter.textContent.replace(/\D/g, ''); // remove + sign

    const increment = target / 100; // speed control

    if(count < target){
      counter.firstChild.textContent = Math.ceil(count + increment);
      setTimeout(updateCount, 100); // updates every 10ms
    } else {
      counter.firstChild.textContent = target; // ensure it ends exactly
    }
  }

  updateCount();
});