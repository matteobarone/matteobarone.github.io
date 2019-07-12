import '../css/index.css';
import {pointer} from './animations/pointer';
import {changeColor} from './animations/changeColor';

let randomNumber = Math.floor(Math.random() * 5) + 1;
const BACKGROUND_HEADER_INTERVAL = 5000;

window.addEventListener('load', init, false);

function init() {
  randomNumber = changeColor(randomNumber);
  setInterval(() => randomNumber = changeColor(randomNumber), BACKGROUND_HEADER_INTERVAL);
  pointer();
}
