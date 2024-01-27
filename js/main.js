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

$(function () {
  var $slider5 = $('#js-slider');
 
  $slider5.slick({
    fade: true,
    speed: 2000,
    arrows: false, // 前・次のボタンを表示しない
    dots: true, // ドットナビゲーションを表示する
    appendDots: $('.p-mainVisual__dots'), // ドットナビゲーションの生成位置を変更
    fade: true, // スライド切り替えをフェード
    autoplay: false, //自動再生させない
    slidesToShow: 1, // 表示させるスライド数
  });
  /*--- プログレスバー設定 -----------------------*/
  var
    time = 3,
    $bar = $('.p-mainVisual__dots .slick-dots li.slick-active button'),
    isPause,
    tick,
    percentTime;
  function startProgressbar() {
    resetProgressbar();
    percentTime = 0;
    isPause = false;
    tick = setInterval(interval, 10);
  }
  function interval() {
    if (isPause === false) {
      percentTime += 1 / (time + 0.1);
      $bar = $('.p-mainVisual__dots .slick-dots li.slick-active button');
      $bar.css({
        width: percentTime + "%"
      });
      if (percentTime >= 100) {
        $slider5.slick('slickNext');
        startProgressbar();
      }
    }
  }
  function resetProgressbar() {
    $bar = $('.p-mainVisual__dots .slick-dots li.slick-active button');
    $bar.css({
      width: 0 + '%'
    });
    clearTimeout(tick);
  }
  startProgressbar();
  // カーソルが乗ったら止める
  $slider5.on({
    mouseenter: function () { isPause = true; },
    mouseleave: function () { isPause = false; }
  });
   
  // ドットがクリックされたら再発火(スライド切り替え前のイベント)
  $slider5.on('beforeChange', function (slick, currentSlide, nextSlide) {
    startProgressbar();
  });
});