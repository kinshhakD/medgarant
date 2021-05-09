const div = list => {
  const block = document.createElement('div');

  block.classList = list;

  return block;
};

const createButton = (className, idName) => {
  const button = document.createElement('button');

  button.className = className;

  button.id = idName;

  return button;
};

export const buttonFormMain = () => {
  const record = div('record');

  const button = div('btn btn-one');

  const span = document.createElement('span');

  span.textContent = 'Записаться';

  button.prepend(span);

  record.prepend(button);

  return document.querySelector('.main').appendChild(record);
};

export const buttonFormModal = () => {
  const insert = document.querySelector('.main');

  const record = div('record');

  const button = createButton('btn btn-record', 'buttonForm');

  button.textContent = 'Записаться';

  record.prepend(button);

  button.addEventListener('click', () => {
    console.log(123);
  });

  insert.after(record);
};
