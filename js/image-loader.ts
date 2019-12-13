const loaded = (imgEl) => imgEl.classList.add('completed');

export const imageLoader = () => {
  const images = document.querySelectorAll('img');
  if (!images.length) {
    return;
  }

  images.forEach(img => {
    img.complete
      ? loaded(img)
      : img.addEventListener('load', () => loaded(img));
  });
};
