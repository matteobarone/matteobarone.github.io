import '../css/index.css';
import {pointer} from './animations/pointer';

const MAX_COLOR_NUMBER = 5;
const root = document.documentElement;
const header = document.querySelector('header');

let randomNumber = Math.floor(Math.random() * 5) + 1;

window.addEventListener('load', init, false );

function init() {
  changeColor();
  setInterval(() => changeColor(), 2000);
  pointer();
}

function changeColor() {
  const randomColor = getComputedStyle(root).getPropertyValue(`--primary-color-${randomNumber}`);
  header.style.setProperty('--header-bg-color', randomColor);

  randomNumber = randomNumber === MAX_COLOR_NUMBER ? 1 : ++randomNumber;
}
