export const createElement = (node, classList) => {
  const element = document.createElement(node);
  element.classList = classList;
  return element;
};

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

export const modalTitle = (service) => {
  const textBlock = createElement('div', 'modal-service');

  const titleBlock = document.createElement('h5');

  textBlock.prepend(titleBlock);

  titleBlock.prepend(service);

  return textBlock.outerHTML;
};

export const descriptionText = (text) => {
  const textBlock = createElement('div', 'modal-description');

  textBlock.prepend(text);

  return textBlock.outerHTML;
};

export const servicePriceKeys = (serviceObject) => {
  const listContainer = createElement('div', 'modal-list-container');

  Object.keys(serviceObject).forEach((item) => {
    const itemBlock = createElement('div', 'modal-list-block');

    const ul = createElement('ul', 'modal-list-flex');

    const serviceLi = createElement('li', 'modal-list-service');

    const priceLi = createElement('li', 'modal-list-service');

    listContainer.appendChild(itemBlock);

    itemBlock.appendChild(ul);

    ul.prepend(serviceLi, priceLi);

    serviceLi.prepend(item);

    priceLi.prepend(serviceObject[item]);
  });
  return listContainer.outerHTML;
};
