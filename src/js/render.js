import refs from './refs';
import { success, error } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';
import updateMarkup from './updateMarkup';
import apiService from './apiService';

function loadImages() {
  apiService.fetchImages().then(images => {
    if (images.length < 1) {
      error({
        title: 'Пожалуйста, уточните запрос!',
        hide: true,
        delay: 2000,
      });
      return;
    } else {
      success({
        title: 'Изображения найдены!',
        hide: true,
        delay: 2000,
      });
      updateMarkup(images);
      refs.loadMoreBtn.classList.remove('is-hidden');
      refs.loadMoreBtn.classList.add('load-button');
    }
  });
}

export default loadImages;
