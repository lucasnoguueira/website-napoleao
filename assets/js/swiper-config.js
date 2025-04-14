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

const EXPERIENCE_CARD_SETUP = {
  instance: null,
  containerClass: '.our-events-list',
  destroyOnDesktop: false,

  config: {
    slidesPerView: 'auto',
    spaceBetween: 16,
    lazy: true,
    touchEventsTarget: 'container',
    breakpoints: {
      768: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 24
      },
      1024: {
        slidesPerView: 4,
        slidesPerGroup: 4,
        spaceBetween: 24
      }
    },
    pagination: {
      el: '.our-events-list-pagination',
      clickable: true
    },
    navigation: {
      nextEl: '.our-events-list-button-next',
      prevEl: '.our-events-list-button-prev'
    }
  },

  elements: {}
}

EXPERIENCE_CARD_SETUP.instance = new Swiper(
  EXPERIENCE_CARD_SETUP.containerClass,
  EXPERIENCE_CARD_SETUP.config
)
