// core version + navigation, pagination modules:
import Swiper, { Navigation, Pagination, Autoplay } from "swiper";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// init Swiper:
const swiper = new Swiper(".swiper", {
  // configure Swiper to use modules
  modules: [Navigation, Pagination, Autoplay],

  // Optional parameters
  direction: "horizontal",

  autoplay: {
    delay: 500,
  },
  speed: 2000,
  loop: true,

  // Responsive breakpoints
  breakpoints: {
    // when window width is <= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 0,
      loop: true,
    },
    // when window width is <= 480px
    680: {
      slidesPerView: 2,
      spaceBetween: 0,
      loop: true,
    },

    // when window width is <= 800px
    900: {
      slidesPerView: 2,
      spaceBetween: 0,
      loop: true,
    },
    1100: {
      slidesPerView: 3,
      spaceBetween: 0,
      loop: true,
    },
    1300: {
      slidesPerView: 3,
      spaceBetween: 0,
      loop: true,
    },
    1600: {
      slidesPerView: 4,
      spaceBetween: 0,
      loop: true,
    },
  },

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    nextEl: ".image-swiper-button-next",
    prevEl: ".image-swiper-button-prev",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});


// move events from fake buttons to real buttons
document.querySelector('.mh-swiper-block--arrow-prev').addEventListener('click', () => {
  document.querySelector('.swiper-button-prev').click()
})
document.querySelector('.mh-swiper-block--arrow-next').addEventListener('click', () => {
  document.querySelector('.swiper-button-next').click()
})
