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
  slidesPerGroup: 1,
  loop: true,
  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },
  // allowTouchMove: false,
  freeMode: true,
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1200: {
      slidesPerView: 4,
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
  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },
  // allowTouchMove: false,
  freeMode: true,

});
export {slider, carousel};
