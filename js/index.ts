import '../css/index.css';
import {imageLoader} from './image-loader';

let windowScrollY = window.scrollY;

document.addEventListener('DOMContentLoaded', () => {
  imageLoader();

  const headerElement = document.querySelector('header');
  headerElement.classList.add('show--translate');

  window.addEventListener('scroll', () => {
    window.scrollY > windowScrollY
      ? hasHeaderShowClass() && headerElement.classList.remove('show--translate')
      : !hasHeaderShowClass() && headerElement.classList.add('show--translate');

    windowScrollY = window.scrollY;
  });

  function hasHeaderShowClass() {
    return headerElement.classList.contains('show--translate');
  }

  const selectorsToAnimate = ['main', 'section'];
  selectorsToAnimate.forEach(selector => {
    document.querySelector(selector).classList.add('show--opacity');
  })
});
