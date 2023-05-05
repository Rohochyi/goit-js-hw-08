
// import throttle from 'lodash.throttle';

const ref = document.querySelector('.feedback-form');

ref.addEventListener('input', () => {
  console.log(ref.target.value);
});