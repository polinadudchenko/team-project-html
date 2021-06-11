(() => {
  const refs = {
    openMenuBtn: document.querySelector('.main-nav__open-button'),
    closeMenuBtn: document.querySelector('.main-nav__close-button'),
    menu: document.querySelector('.main-nav__menu'),
  };

  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);

  function toggleMenu() {
    refs.menu.classList.toggle('is-open');
  }
})();