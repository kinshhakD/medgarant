import 'izimodal';
import { sliderArray } from '../modalHContent';
import 'slick-carousel';
import { modalClose } from '../modalHome';

$('#item');
jQuery('#item');

const cabinets = ['./assets/cabinet1.jpg', './assets/cabinet2.jpg', './assets/cabinet3.jpg', './assets/cabinet4.jpg'];

const createModalDOM = (idName) => {
  const modal = document.createElement('div');

  modal.id = idName;

  document.body.appendChild(modal);
};

const closeModal = (idName) => {
  const isModal = document.getElementById(idName);

  const html = document.querySelector('html');

  html.classList.remove('iziModal-isOverflow');

  document.body.style.overflow = 'auto';

  isModal.remove();
};

const openAboutModal2 = (selectorId) => {
  const isModal = document.getElementById(selectorId);

  if (!isModal) {
    createModalDOM(selectorId);

    $(`#${selectorId}`).iziModal({
      title: 'О нас',
      transitionIn: 'bounceInDown',
      background: 'rgba(93, 204, 255, 0.7)',
      headerColor: 'rgb(123, 182, 243)',
      width: 600,
    });

    $(`#${selectorId}`).iziModal('open', { zindex: 99999 });

    $(`#${selectorId}`).iziModal('setContent', {
      content: `
      ${sliderArray(cabinets, 'slick__slider__about')}<div class='about-container'>
      <div><p>В стоматологии «МедГарант» работают квалифицированные врачи с большим стажем работы. Доктора регулярно участвуют в международных выставках, конференциях, а также повышают свою квалификацию. В «МедГаранте» применяются только современные пломбировочные материалы, антисептики и новые методы обтурации корневых каналов.</p></div>
      <h3 class='about-list-title'>В кабинете предоставляют следующие услуги:</h3>
      <ul>
      <li>Лечение зубов с обезболиванием</li>
      <li>Косметические реставрации</li>
      <li>Удаление зубов</li>
      <li>Гигиеническая чистка ультразвуковым скалером и содоструем</li>
      <li>Все виды протезирования: металлокерамические коронки и мосты, все виды съемного протезирования, коронка на культевой вкладке, безметалловые коронки</li>
      <li>Ортодонтическое лечение: исправление прикуса с помощью пластинок, миобрейсы, брекет-системы «Damon»</li>
      <li>Микропротезирование</li>
    </ul>
      </div>
    `,
    });

    $(document).ready(() => {
      $('.slick__slider__about').slick({
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 5000,
        dots: true,
      });
    });
  }
};

export const aboutModal = () => {
  const about = document.getElementById('about');

  about.addEventListener('click', () => {
    document.body.style.overflow = 'hidden';

    openAboutModal2('aboutOpened');
  });
};
