'use strict';

const hide = document.querySelector('#hide'),
      header = document.querySelector('.header');

hide.addEventListener('click', () => {
    header.classList.toggle('hide');
});