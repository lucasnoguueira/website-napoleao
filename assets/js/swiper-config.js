const swiper = new Swiper('.mySwiper', {
  slidesPerView: 'auto',
  spaceBetween: 30,
  centeredSlides: true,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  }
})
