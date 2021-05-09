import '../style/app.scss';

import { headerResolution, headerLess1023, headerMore1024 } from './models/header';
import { modalsService } from './models/indexPage/modalHome';
import { aboutModal } from './models/indexPage/modalMenu/modalAbout';
import { modalsMenuApp } from './models/indexPage/modalMenu/modalsMenu';

import { buttonFormMain } from './models/modalForm';

$('#item');
jQuery('#item');

export const surgeryImages = ['./assets/block-1.jpg', './assets/dental.jpg', './assets/dental2.png'];

function app() {
  // menu modals
  modalsMenuApp();

  // about Modal

  // main modals
  modalsService();

  buttonFormMain();

  // header image
  headerResolution();

  headerMore1024();

  headerLess1023();
}

document.addEventListener('DOMContentLoaded', app);
