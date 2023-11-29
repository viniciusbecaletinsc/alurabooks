const swiper = new Swiper('.swiper', {
  spaceBetween: 20,
  slidesPerView: 2,
  centeredSlides: true,

  breakpoints: {
    530: {
      slidesPerView: 3,
    }
  },

  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
})