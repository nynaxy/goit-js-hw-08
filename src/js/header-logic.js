import watchedMovies from './watchedMovies';
import queueMovies from './queueMovies';
import modalWindow from './modal-window';
import { watchedArray, queueArray } from './library';

const refs = {
  header: document.querySelector('#header'),
  libraryNavigationBtn: document.querySelector('#library-navigation-btn'),
  filmoteca: document.querySelector('.header-logo'),
  filmIcon: document.querySelector('.film-icon'),
  searchForm: document.querySelector('.search-form'),
  libraryNavigation: document.querySelector('.library-navigation'),
  homeNavigatiomBtn: document.querySelector('#home-navigatiom-btn'),
  errorNotification: document.querySelector('.error-message'),
  homeGalleryList: document.querySelector('.home-gallery'),
  watchedGalleryList: document.querySelector('.watched-gallery'),
  queueGalleryList: document.querySelector('.queue-gallery'),
  watchedButton: document.querySelector('.watched'),
  queueButton: document.querySelector('.queue'),
};

refs.libraryNavigationBtn.addEventListener('click', onLibraryNavigationBtnClick);
refs.filmoteca.addEventListener('click', onMainHeaderNavigationClick);
refs.filmIcon.addEventListener('click', onMainHeaderNavigationClick);
refs.homeNavigatiomBtn.addEventListener('click', onMainHeaderNavigationClick);
refs.watchedButton.addEventListener('click', onWatchedBtnClick);
refs.queueButton.addEventListener('click', onQueueBtnClick);

function onLibraryNavigationBtnClick() {
  refs.searchForm.classList.add('is-hiden');
  refs.header.classList.remove('main-header-overlay');
  refs.header.classList.add('library-haeder-overlay');
  refs.libraryNavigation.classList.remove('is-hiden');
  refs.errorNotification.classList.add('is-hiden');

  refs.watchedButton.classList.add('btn--active');
  refs.homeGalleryList.classList.add('is-hiden');
  refs.watchedGalleryList.classList.remove('is-hiden');
  // refs.queueGalleryList.classList.remove('is-hiden');
  watchedMovies(watchedArray);
  modalWindow();
}

function onMainHeaderNavigationClick() {
  refs.header.classList.remove('library-haeder-overlay');
  refs.header.classList.add('main-header-overlay');
  refs.searchForm.classList.remove('is-hiden');
  refs.libraryNavigation.classList.add('is-hiden');

  refs.homeGalleryList.classList.remove('is-hiden');
  refs.watchedGalleryList.classList.add('is-hiden');
  refs.queueGalleryList.classList.add('is-hiden');
}

function onWatchedBtnClick() {
  refs.queueButton.classList.remove('btn--active');
  refs.watchedButton.classList.add('btn--active');
  refs.watchedGalleryList.classList.remove('is-hiden');
  refs.queueGalleryList.classList.add('is-hiden');

  watchedMovies(watchedArray);
  modalWindow();
}

function onQueueBtnClick() {
  refs.watchedButton.classList.remove('btn--active');
  refs.queueButton.classList.add('btn--active');
  refs.queueGalleryList.classList.remove('is-hiden');
  refs.watchedGalleryList.classList.add('is-hiden');

  queueMovies(queueArray);
  modalWindow();
}
