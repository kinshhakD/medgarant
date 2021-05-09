const div = list => {
  const block = document.createElement('div');

  block.classList = list;

  return block;
};

export const headerMore1024 = () => {
  if (window.innerWidth >= 1024) {
    const header = document.createElement('header');

    header.className = 'header1024';

    const logo = document.createElement('img');

    logo.src = './assets/logo_transparent.png';

    header.prepend(logo);

    const nav = document.getElementById('overlay');

    return nav.after(header);
  }
};

export const headerLess1023 = () => {
  if (window.innerWidth <= 1023) {
    const header = document.createElement('header');

    const headerContent = div('header-content');

    header.className = 'header-tablet';

    const logo = document.createElement('img');

    logo.src = './assets/logo_transparent.png';

    header.prepend(headerContent);

    headerContent.prepend(logo);

    return document.body.prepend(header);
  }
};

export const headerResolution = () => {
  window.addEventListener('resize', () => {
    const header = document.querySelector('.header-tablet');

    if (!header) {
      headerLess1023();
    } else if (header) {
      if (window.innerWidth >= 1024) {
        header.remove();
      }
    }
  });

  window.addEventListener('resize', () => {
    const header = document.querySelector('.header1024');

    if (!header) {
      headerMore1024();
    } else if (header) {
      if (window.innerWidth <= 1023) {
        header.remove();
      }
    }
  });
};
