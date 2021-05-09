import {
  descriptionText, modalTitle, sliderArray, servicePriceKeys,
} from './modalHContent';

import 'izimodal';

import 'slick-carousel';

$('#item');
jQuery('#item');

// import { buttonFormMain, buttonFormModal } from './modalForm';

const object = {

  чистка: 900,
  шлифовка: 1000,
  другое: 1100,

};

// const argumentsModal = [trigger, selectorId, description, servicePrice, { title: name }];

export const surgeryImages = ['./assets/block-1.jpg', './assets/dental.jpg', './assets/dental2.png'];

const createModalDOM = (idName) => {
  const modal = document.createElement('div');

  modal.id = idName;

  document.body.appendChild(modal);
};

export const closeModal = (idName) => {
  const isModal = document.getElementById(idName);

  const html = document.querySelector('html');

  html.classList.remove('iziModal-isOverflow');

  document.body.style.overflow = 'auto';

  isModal.remove();
};

const textDesc = 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.';

const openModal = (selectorId, slider, description, servicePrice, { title: name }) => {
  const isModal = document.getElementById(selectorId);

  if (!isModal) {
    createModalDOM(selectorId);

    $(`#${selectorId}`).iziModal({
      title: name,
      background: 'rgba(93, 204, 255, 0.7)',
      headerColor: 'rgb(123, 182, 243)',
      transitionIn: 'fadeInLeft',
      transitionOut: 'fadeOutRight',

    });

    $(`#${selectorId}`).iziModal('open', { zindex: 99999 });

    // ${buttonFormMain()}

    $(`#${selectorId}`).iziModal('setContent', {
      content: `${sliderArray(slider, 'slick__slider__main')}<div class='modal-container'>
      ${modalTitle(name)}
      ${descriptionText(description)}
      ${servicePriceKeys(servicePrice)}


      </div>`,
      default: true,

    });

    $(document).ready(() => {
      $('.slick__slider__main').slick({
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',

      });
    });
  }
};

const modalOpen = (trigger, selectorId, slider, description, servicePrice, { title: name }) => {
  $(document).on('click', trigger, (event) => {
    event.preventDefault();

    openModal(selectorId, slider, description, servicePrice, { title: name });

    document.body.style.overflow = 'hidden';
  });
};

export const modalClose = (idName) => {
  $(document).on('closed', `#${idName}`, () => {
    closeModal(idName);
  });
};

export const modalsService = () => {
  // TRIGGERS MODAL ** Create(open)/Remove(close)
  // Хирургия
  modalOpen('.surgery-modal', 'surgery', surgeryImages, textDesc, object, { title: 'Хирургия' });
  modalClose('surgery');

  // Ортопедия
  modalOpen('.orthopedics-modal', 'orthopedics', surgeryImages, textDesc, object, { title: 'Ортопедия' });
  modalClose('orthopedics');

  // Ортодонтия
  modalOpen('.orthodontics-modal', 'orthodontics', surgeryImages, textDesc, object, { title: 'Ортодонтия' });
  modalClose('orthodontics');

  // Тепария
  modalOpen('.therapy-modal', 'therapy', surgeryImages, textDesc, object, { title: 'Терапия' });
  modalClose('therapy');

  // Гигиена
  modalOpen('.hygiene-modal', 'hygiene', surgeryImages, textDesc, object, { title: 'Гигиена' });
  modalClose('hygiene');

  // Эндодонтия
  modalOpen('.endodontics-modal', 'endodontics', surgeryImages, textDesc, object, { title: 'Эндодонтия' });
};
