import './sass/styles.scss';
import refs from './js/refs';
import apiService from './js/apiService';
import updateMarkup from './js/updateMarkup';

refs.form.addEventListener('submit', handleTextInput);

function handleTextInput(event) {
  event.preventDefault();
  const keyWord = event.currentTarget;
  apiService.query = keyWord.elements.query.value;
  apiService.resetPage();
  refs.loadMoreBtn.classList.add('is-hidden');
  refs.loadMoreBtn.classList.remove('load-button');
  refs.gallery.innerHTML = '';

  if (keyWord === '') {
    return;
  }

  loadImages();
  refs.loadMoreBtn.classList.remove('is-hidden');
  refs.loadMoreBtn.classList.add('load-button');
}

function loadImages() {
  apiService.fetchImages().then(updateMarkup);
}

refs.loadMoreBtn.addEventListener('click', () => {
  loadImages();
  setTimeout(() => {
    window.scrollBy({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  }, 1500);
});
