import { closeModal, modalClose, surgeryImages } from '../modalHome';
import { aboutModal } from './modalAbout';

const overlay = document.getElementById('overlay');

const burgerMenu = () => {
  const button = document.getElementById('openMenu');

  const nav = document.getElementById('overlay');

  button.addEventListener('click', () => {
    if (!button.classList.contains('menu-open')) {
      document.body.style.overflow = 'hidden';

      nav.classList.add('show-menu');
    } else {
      nav.classList.remove('show-menu');

      document.body.style.overflow = 'auto';
    }
  });
};

export const backMenu = () => {
  const home = document.getElementById('home');

  home.addEventListener('click', () => {
    $('html, body').animate({ scrollTop: 0 }, 500);
    return false;
  });
};

const closeMenu = () => {
  document.getElementById('close-menu').addEventListener('click', () => {
    overlay.classList.remove('show-menu');

    document.body.style.overflow = 'auto';
  });

  const modalLinks = document.querySelectorAll('.btn-list-close');

  modalLinks.forEach((link) => {
    link.addEventListener('click', () => {
      overlay.classList.remove('show-menu');

      document.body.style.overflow = 'auto';
    });
  });
};

export const modalsMenuApp = () => {
  burgerMenu();

  closeMenu();

  // Go to Home
  backMenu();

  aboutModal('about-modal');
  modalClose('aboutOpened');
};
