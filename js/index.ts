import '../css/index.css';
import {pointer} from './animations/pointer';
import {changeColor} from './animations/changeColor';

let randomNumber = Math.floor(Math.random() * 5) + 1;

window.addEventListener('load', init, false);

function init() {
  randomNumber = changeColor(randomNumber);
  setInterval(() => randomNumber = changeColor(randomNumber), 2000);
  pointer();
}
