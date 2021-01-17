import imageListTpl from '../templates/imageCard.hbs';
import refs from './refs';

function updateMarkup(images) {
  const markup = imageListTpl(images);
  refs.gallery.insertAdjacentHTML('beforeend', markup);
}

export default updateMarkup;
