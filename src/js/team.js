const refs = {
  body: document.querySelector('body'),
  openModalBtn: document.querySelector('.open-modal'),
  closeModalBtn: document.querySelector('.close-modal'),
  backdrop: document.querySelector('.js-backdrop'),
};

refs.openModalBtn.addEventListener('click', onOpenModal);
refs.closeModalBtn.addEventListener('click', onCloseModal);
refs.backdrop.addEventListener('click', onBackdropClick);

function onOpenModal(evt) {
  evt.preventDefault();
  window.addEventListener('keydown', onEscKeyPress);
  refs.body.classList.add('popup-open');
  refs.body.classList.add('show-modal');
}

function onCloseModal() {
  window.removeEventListener('keydown', onEscKeyPress);
  document.body.classList.remove('show-modal');
  document.body.classList.remove('popup-open');
}

function onBackdropClick(event) {
  if (event.currentTarget === event.target) {
    onCloseModal();
  }
}

function onEscKeyPress(event) {
  const ESC_KEY_CODE = 'Escape';
  const isEscKey = event.code === ESC_KEY_CODE;

  if (isEscKey) {
    onCloseModal();
  }
}
