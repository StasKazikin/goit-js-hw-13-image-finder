import './sass/styles.scss';
import refs from './js/refs';
import apiService from './js/apiService';
import loadImages from './js/render';

refs.form.addEventListener('submit', handleTextInput);

function handleTextInput(event) {
  event.preventDefault();
  const keyWord = event.currentTarget;
  apiService.query = keyWord.elements.query.value;
  apiService.resetPage();
  refs.loadMoreBtn.classList.add('is-hidden');
  refs.loadMoreBtn.classList.remove('load-button');
  refs.gallery.innerHTML = '';
  loadImages();
}

refs.loadMoreBtn.addEventListener('click', () => {
  loadImages();
  setTimeout(() => {
    window.scrollTo({
      top: document.documentElement.offsetHeight,
      behavior: 'smooth',
    });
  }, 2000);
});
