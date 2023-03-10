$(function () {
  $('.js-btn').on('click', function () {        // js-btnクラスをクリックすると、
    $('body, .l-header__nav, .c-hamburger__line').toggleClass('open'); // メニューとバーガーの線にopenクラスをつけ外しする
  })
});


const mySwiper = new Swiper('.swiper', {
  // Optional parameters

   slidesPerView: 1.2,
   breakpoints: {
    // スライドの表示枚数：500px以上の場合
    500: {
      slidesPerView: 3,
      spaceBetween: 40,
    }
  },
  spaceBetween: 16,
  

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

 
  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});