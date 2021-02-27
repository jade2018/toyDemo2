//banner
var mySwiper1 = new Swiper('.banner__carousel', {
  slidesPerView: 1,
  effect: 'fade',
  loop: true,
  autoplay: {
    delay: 3000, //延遲時間
    stopOnLastSlide: false,
    disableOnInteraction: true,
  },


  navigation: {
    nextEl: '.banner__button__next',
    prevEl: '.banner__button__prev',
  },

})

//鼠标覆盖停止自动切换, myswiper1 命名要對應正確, 否則無法成功
mySwiper1.el.onmouseover = function () {
  mySwiper1.autoplay.stop();
}

//鼠标离开开始自动切换, myswiper1 命名要對應正確, 否則無法成功
mySwiper1.el.onmouseout = function () {
  mySwiper1.autoplay.start();
}


//news
var mySwiper2 = new Swiper('.news__carousel', {
  loop: true,
  pagination: {
    el: '.news__swiper-pagination',
    clickable: true,
  },
})

//product
var mySwiper3 = new Swiper('.product__carousel', {
  slidesPerView: 2,
  spaceBetween: 10,
  watchSlidesProgress: true,
  breakpoints: { 
    768: {  //当屏幕宽度大于等于768
      slidesPerView: 4,
      // spaceBetween: 5,
    },
  },

  navigation: {
    nextEl: '.product__button__next',
    prevEl: '.product__button__prev',
  },
})

// //product
// var mySwiper4 = new Swiper('.product__carousel__sm', {
//   slidesPerView: 2,
//   spaceBetween: 10,
//   watchSlidesProgress: true,

//   navigation: {
//     nextEl: '.product__button__next',
//     prevEl: '.product__button__prev',
//   },
// })
