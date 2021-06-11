(() => {
  const refs = {
    openMenuBtn: document.querySelector('.main-nav__open-button'),
    closeMenuBtn: document.querySelector('.main-nav__close-button')
  };


  refs.openMenuBtn.addEventListener('click', hideMenuBtn);
  refs.closeMenuBtn.addEventListener('click', hideMenuBtn);

  function hideMenuBtn() {
    var x = document.getElementById("open-button");
    if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
  }
})();