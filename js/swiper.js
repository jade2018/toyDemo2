//banner
const mySwiper1 = new Swiper('.banner__carousel', {
  slidesPerView: 1,
  // spaceBetween: 30,
  loop: true,
  navigation: {
    nextEl: '.banner__button__next',
    prevEl: '.banner__button__prev',
  },
});

//news
const mySwiper2 = new Swiper('.news__carousel', {
  loop: true,
  pagination: {
    el: '.news__swiper-pagination',
    clickable: true,
  },
});

//product
const mySwiper3 = new Swiper('.product__carousel', {
  slidesPerView: 4,
  spaceBetween: 10,
  navigation: {
    nextEl: '.product__button__next',
    prevEl: '.product__button__prev',
  },
});
