'use strict';

let currentSlide = 0;

const btnStart = document.getElementById('btn-start');
const heroSlide = document.querySelector('.hero');
const heroFront = document.querySelector('.hero__front');
const heroSubtitle = document.querySelector('.hero__subtitle');
const title = document.querySelector('.hero__title');

const secondSlide = document.querySelector('.second-slide');
const slideInner = document.querySelectorAll('.slide__inner');


btnStart.addEventListener('click', () => {
  heroFront.classList.add('start');
  heroSubtitle.classList.add('start');
  if (window.innerWidth <= 576) {
    title.style.transform = `translateY(-50px)`;
  }

  setInterval(() => {
    heroSlide.style.transform = `translateX(-100%)`;
    secondSlide.classList.add('active');
  }, 2300);

  setInterval(() => {
    slideInner.forEach(el => {
      el.classList.add('show');
    });
  }, 4000);
});

const swiper = new Swiper('.swiper', {
  mousewheel: true,
  speed: 2000,
  navigation: {
    nextEl: '.slide__btn',
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  },
  breakpoints: {
    395: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },
  }
});

console.log(window.innerWidth);