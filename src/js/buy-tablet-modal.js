(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-buy-tablet-modal-open]'),
    closeModalBtn: document.querySelector('[data-buy-tablet-modal-close]'),
    modal: document.querySelector('[data-buy-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    document.body.classList.toggle('buy-modal-open');
    refs.modal.classList.toggle('is-hidden');
  }
})();