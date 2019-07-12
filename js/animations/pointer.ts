import {TweenMax} from 'gsap';
import {_createElement} from './util';

const POINTER_SELECTOR = '.pointer';
const selectableElements = document.querySelectorAll('.is-selectable');
const pointerElement = _createElement('div', 'pointer');
const pointerSize = parseInt(window.getComputedStyle(pointerElement).getPropertyValue('--pointer-size'));
const pointerBorderRadius = parseInt(window.getComputedStyle(pointerElement).getPropertyValue('--pointer-border-radius'));
let blockMovement = false;

export function pointer() {
  TweenMax.set(POINTER_SELECTOR, {xPercent: -50, yPercent: -50});
  document.addEventListener('mousemove', _mousemovePointer);

  selectableElements.forEach(el => {
    el.addEventListener('mouseover', _mouseoverPointer);
    el.addEventListener('mouseout', _mouseoutPointer);
  })
}

function _mousemovePointer(e) {
  if (!blockMovement) {
    const {x, y} = e;
    TweenMax.to(POINTER_SELECTOR, .2, {x, y});
  }
}

function _mouseoverPointer(e) {
  blockMovement = true;
  const {target} = e;
  const {top, left} = target.getBoundingClientRect();
  TweenMax.to(POINTER_SELECTOR, .3, {
    borderRadius: 0,
    xPercent: 0,
    yPercent: 0,
    width: target.offsetWidth,
    height: target.offsetHeight,
    x: top,
    y: left,
  });
}

function _mouseoutPointer() {
  blockMovement = false;
  TweenMax.to(POINTER_SELECTOR, .3, {
    borderRadius: pointerBorderRadius,
    width: pointerSize,
    height: pointerSize,
    xPercent: -50,
    yPercent: -50,
  });
}
