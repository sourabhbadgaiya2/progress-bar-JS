const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circle = document.querySelectorAll('.circle');

let currentActive = 1;

next.addEventListener('click', () => {
  currentActive++;

  if (currentActive > circle.length) {
    currentActive = circle.length;
  }
  updadte();
});

prev.addEventListener('click', () => {
  currentActive--;

  if (currentActive < 1) {
    currentActive = 1;
  }

  updadte();
});

function updadte() {
  circle.forEach((circles, idx) => {
    if (idx < currentActive) {
      circles.classList.add('active');
    } else {
      circles.classList.remove('active');
    }
  });

  const actives = document.querySelectorAll('.active');

  progress.style.width = ((actives.length - 0.5) / circle.length) * 100 + '%';

  if (currentActive === 1) {
    prev.disabled = true;
  } else if (currentActive === circle.length) {
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }
}
