
var swiper = new Swiper(".Interes", {
  pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
  },
  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  },
  
  slidesPerView: 1,
  spaceBetween: 20,
    autoplay: true,
    freeMode: true,
    speed: 1000,
    rewind: true,
    breakpoints: {
      900: {
        slidesPerView: 3,
        spaceBetween: 50,
      },
    },
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



