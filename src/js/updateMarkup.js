import imageListTpl from '../templates/imageCard.hbs';
import refs from './refs';
import { success, error } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';

function updateMarkup(images) {
  if (images.length > 0) {
    success({
      title: 'Изображения найдены!',
      hide: true,
      delay: 2000,
    });
    const markup = imageListTpl(images);
    refs.gallery.insertAdjacentHTML('beforeend', markup);
  } else {
    error({
      title: 'Пожалуйста, уточните запрос!',
      hide: true,
      delay: 2000,
    });
    return;
  }
}

export default updateMarkup;
