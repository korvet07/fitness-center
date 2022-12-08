// Swiper 8.2.6
import Swiper from './vendor/swiper-bundle.min';

// import styles bundle

import './vendor/focus-visible-polyfill';

const slider = new Swiper('.slider', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  speed: 400,
  loop: true,
  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },
  freeMode: true,
  breakpoints: {
    320: {
      initialSlide: 2,
      slidesPerView: 1,
      slidesPerGroup: 1,
    },
    767: {
      initialSlide: 3,
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 30,
    },
    1200: {
      initialSlide: 1,
      slidesPerView: 4,
      slidesPerGroup: 4,
      spaceBetween: 40,
    },
  },
});

const carousel = new Swiper('.comments___carousel', {
  navigation: {
    nextEl: '.comments__button-next',
    prevEl: '.comments__button-prev',
  },
  speed: 600,
  slidesPerGroup: 1,
  slidesPerView: 1,
  centeredSlides: true,
  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },
  // allowTouchMove: false,
  freeMode: true,

});
export {slider, carousel};
