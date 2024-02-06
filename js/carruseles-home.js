
var swiper = new Swiper(".Interes", {
  pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
  },
  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  },
  slidesPerView: 3,
  autoplay: true,
  freeMode: true,
  spaceBetween: 50,
  speed: 1000,
  rewind: true,

});

var swiper3 = new Swiper(".Banner", {
  pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
  },
  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  },
  slidesPerView: 1,
  autoplay: true,
  freeMode: true,
  speed: 1000,
  rewind: true,
  effect: 'fade',

});



