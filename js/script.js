var navMain = document.querySelector(".main-nav");
var navToggle = document.querySelector(".page-header__toggle");
var headerWrapper = document.querySelector(".page-header__wrapper");
var headerLogo = document.querySelector(".page-header__logo");

navMain.classList.remove("main-nav--nojs");
navToggle.classList.remove("page-header__toggle--nojs");
headerWrapper.classList.remove("page-header__wrapper--nojs");
headerLogo.classList.remove("page-header__logo--nojs");

navToggle.addEventListener("click", function() {
  if (navMain.classList.contains("main-nav--closed")) {
    navMain.classList.remove("main-nav--closed");
    navMain.classList.add("main-nav--opened");
  } else {
    navMain.classList.add("main-nav--closed");
    navMain.classList.remove("main-nav--opened");
  }
});

navToggle.addEventListener("click", function() {
  if (navToggle.classList.contains("page-header__toggle--close")) {
    navToggle.classList.remove("page-header__toggle--close");
    navToggle.classList.add("page-header__toggle--open");
  } else {
    navToggle.classList.add("page-header__toggle--close");
    navToggle.classList.remove("page-header__toggle--open");
  }
});

var link = document.querySelector(".product__buy-btn, .product-card__buy-btn");
var popup = document.querySelector(".modal-size-selector");
link.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.add("modal-size-selector--show");
});
window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (popup.classList.contains("modal-size-selector--show")) {
      popup.classList.remove("modal-size-selector--show");
    }
  }
});
