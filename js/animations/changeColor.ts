const MAX_COLOR_NUMBER = 5;
const header = document.querySelector('header');
const root = document.documentElement;

export function changeColor(randomNumber: number) {
  const randomColor = getComputedStyle(root).getPropertyValue(`--primary-color-${randomNumber}`);
  header.style.setProperty('--header-bg-color', randomColor);

  return randomNumber === MAX_COLOR_NUMBER ? 1 : ++randomNumber;
}
