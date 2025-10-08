const counters = document.querySelectorAll('.co h1');

function runCounterSequentially(index = 0) {
  if (index >= counters.length) return; // stop when all counters done

  const counter = counters[index];
  const target = +counter.getAttribute('data-target');
  const span = counter.querySelector('.c');

  let count = 0;
  const increment = target / 100;

  const updateCount = () => {
    if (count < target) {
      count += increment;
      counter.firstChild.textContent = Math.ceil(count);
      setTimeout(updateCount, 100);
    } else {
      counter.firstChild.textContent = target;
      // after current finishes, move to the next one
      runCounterSequentially(index + 1);
    }
  };

  updateCount();
}

// start with the first counter
runCounterSequentially();