(() => {
    const refs = {
      openModalBtn: document.querySelector('[data-franchise-modal-open]'),
      closeModalBtn: document.querySelector('[data-franchise-modal-close]'),
      modal: document.querySelector('[data-franchise-modal]'),
    };
  
    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);
  
    function toggleModal() {
      document.body.classList.toggle("modal-open");
      refs.modal.classList.toggle('is-hidden');
      document.body.classList.toggle("overflow-is-hidden")
    }
  })();