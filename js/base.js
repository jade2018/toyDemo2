$(document).ready(function () {

  //top btn
  $('.go__top__item a').click(function (event) {
    event.preventDefault();
    $('html,body').animate({
      scrollTop: 0
    }, 1000);
  });

  //language dropdown
  $('.language__btn').click(function (e) {
    $('.language__dropdown').toggle();
  });

  //banner hover pagination
  $('.banner__carousel').hover(function () {
    //hover後
    $('.banner__button__next, .banner__button__prev').css('opacity', '1')
  }, function () {
    //hover前
    $('.banner__button__next, .banner__button__prev').css('opacity', '0')
  });

  //language dropdown icon rotate
  $('.language__btn').click(function (e) {
    //點擊按鈕
    e.preventDefault();
    //阻擋連結Ａ預設事件 
    $('.arrow').toggleClass('active');
    //增加class
  });

  //hamburg
  $('.showmenu, .overlay').on('click', function () {
    $('.dropdownMenu__wrap').toggleClass('menu__show');
    $('.showmenu').toggleClass('hamburg__cancel');
    $('.overlay').toggleClass('overlay__active');
  });

  //hot product tab
  


});