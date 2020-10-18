(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    overflow: document.querySelector('[data-overflow]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.overflow.classList.toggle('modal-open');
  }
})();

// Скрипт что бы при открытии меню не двигалось боди

(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-menu-open]'),
    closeModalBtn: document.querySelector('[data-menu-close]'),
    overflow: document.querySelector('[data-overflow]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.overflow.classList.toggle('modal-open');
  }
})();
