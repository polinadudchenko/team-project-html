(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-buy-modal-open-tablet]'),
    closeModalBtn: document.querySelector('[data-buy-modal-close-tablet]'),
    modal: document.querySelector('[data-buy-modal-tablet]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    document.body.classList.toggle('buy-modal-open');
    refs.modal.classList.toggle('is-hidden');
  }
})();
