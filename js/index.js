$(function () {

  // Preloader
  $(window).on('load', function () {
    setTimeout(function () {
      $('body').addClass('is-load');
    }, 100);
  });

  // Scroll Header
  $(window).on('load scroll touchmove', function () {
    var sticky = $('body'),
      scroll = $(window).scrollTop();
    if (scroll >= 300) sticky.addClass('is-fixed');
    else sticky.removeClass('is-fixed');
  });

  // Scroll to id
  $('.scroll_link[href^="#"]').bind('click.smoothscroll', function (e) {
    e.preventDefault();
    var target = this.hash,
      $target = $(target);
    $('html, body').stop().animate({
      'scrollTop': $target.offset().top
    }, 900, 'swing', function () {
      window.location.hash = target;
    });
  });

  // $(window).on( 'resize', function() {
  // 	$('body').removeClass('is-visible');
  // });

  $('.hamburger-menu').on('click', function (event) {
    if ($(this).is('.is-active')) {
      $(this).removeClass('is-active').closest('body').removeClass('is-visible');
    }
    else {
      $(this).addClass('is-active').closest('body').addClass('is-visible');
    }
    event.preventDefault();
  });

  $('.close, .offcanvas__overlay').on('click', function (event) {
    $('body').removeClass('is-visible');
    $('.hamburger-menu').removeClass('is-active')
    event.preventDefault();
  });

  // let linkAuth = document.querySelector('.link-auth');
  // let modal = document.querySelector('.modal');

  // linkAuth.addEventListener('click', function (e) {
  //   e.preventDefault();
  //   console.log('клик');
  //   modal.classList.add('modal-show');
  // });

  // window.addEventListener('keydown', function (e) {
  //   if (e.keyCode === 27) {
  //     if (modal.classList.contains('modal-show')) {
  //       e.preventDefault();
  //       modal.classList.remove('modal-show');
  //     }
  //   }
  // });

});


$(document).ready(function () {
  var mySwiper = new Swiper('.slider', {
    // Optional parameters
    loop: true,
    slidesPerView: 1,
    spaceBetween: 10,
    breakpoints: {
      // when window width is >= 480px
      480: {
        slidesPerView: 2,
        spaceBetween: 30
      },
      // when window width is >= 640px
      640: {
        slidesPerView: 3,
        spaceBetween: 40
      }
    }
  })
});

// (function($) {
//   $(function() {
//     $('select').styler();
//   });
//   })(jQuery);
