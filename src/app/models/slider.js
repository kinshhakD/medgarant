import { createElement } from './indexPage/modalHContent';

const picture = (src, className) => {
  const image = document.createElement('img');

  image.className = className;

  image.src = src;

  return image;
};

export const sliderArray = (src = [], sliderClass) => {
  const slick = createElement('div', sliderClass);

  src.forEach((element) => {
    const slickSlide = createElement('div', 'slick__slide');

    const image = picture(element, 'slick__slide');

    slickSlide.prepend(image);

    slick.prepend(slickSlide);
  });

  return slick.outerHTML;
};
