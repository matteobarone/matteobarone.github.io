import {TweenMax} from 'gsap';
import {_createElement} from './util';

const selectableElements = document.querySelectorAll('.is-selectable');

export function pointer() {
  _createElement('div', 'pointer');
  TweenMax.set('.pointer', {xPercent: -50, yPercent: -50});
  document.addEventListener('mousemove', _mousemovePointer);

  selectableElements.forEach(el => {
    el.addEventListener('mouseover', _mouseoverPointer);
    el.addEventListener('mouseout', _mouseoutPointer);
  })
}

function _mousemovePointer(e) {
  const {x, y} = e;
  TweenMax.to('.pointer', .3, {x, y});
}

function _mouseoverPointer() {
  TweenMax.to('.pointer', .3, {className: '+=is-hover', xPercent: -50, yPercent: -50});
}

function _mouseoutPointer() {
  TweenMax.to('.pointer', .3, {className: '-=is-hover', xPercent: -50, yPercent: -50});
}
