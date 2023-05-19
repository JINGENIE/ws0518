/**
 * 화면 : login.js
 * 내용 : 로그인 작동 및 검증
 * 작성자 : 정인보
 * 작성일 : 5.11
 */
let login_form = {
    init:function (){ 
      $('#login_btn').click(function (){ // login_btn > 눌리는 이벤트 발생 > 함수 실행
        login_form.send();
      });
    },
  send:function () {
    $('#login_form').attr({ 
      'action':'/loginimpl', // main controller에서 처리
      'method':'post'
    });
    $('#login_form').submit(); // form 입력받은 정보 보내기
  }
};


//로그인시 검증
function checkidpwd() {
  var user_pwd = document.getElementById("user_pwd").value;

  if (user_pwd.length === 6) {
    // 비밀번호 길이가 6인 경우, 비밀번호 변경 페이지로 이동
    // alert("임시 비밀번호를 사용하셨네요, 비밀번호 변경해주세요")
    window.location.href = "/changeinfo";
  } else {
    // 비밀번호 길이가 6이 아닌 경우, 일반적인 로그인 처리를 수행합니다.
    document.getElementById("login_form").submit(); // 로그인 폼 제출
  }
}
/**
 * WEBSITE: https://themefisher.com
 * TWITTER: https://twitter.com/themefisher
 * FACEBOOK: https://www.facebook.com/themefisher
 * GITHUB: https://github.com/themefisher/
 */

(function ($) {
  'use strict';

  // Preloader
  $(window).on('load', function () {
    $('#preloader').fadeOut('slow', function () {
      $(this).remove();
    });
  });

  
  // Instagram Feed
  if (($('#instafeed').length) !== 0) {
    var accessToken = $('#instafeed').attr('data-accessToken');
    var userFeed = new Instafeed({
      get: 'user',
      resolution: 'low_resolution',
      accessToken: accessToken,
      template: '<a href="{{link}}"><img src="{{image}}" alt="instagram-image"></a>'
    });
    userFeed.run();
  }

  setTimeout(function () {
    $('.instagram-slider').slick({
      dots: false,
      speed: 300,
      // autoplay: true,
      arrows: false,
      slidesToShow: 6,
      slidesToScroll: 1,
      responsive: [{
          breakpoint: 1024,
          settings: {
            slidesToShow: 4
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 3
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2
          }
        }
      ]
    });
  }, 1500);


  // e-commerce touchspin
  $('input[name=\'product-quantity\']').TouchSpin();


  // Video Lightbox
  $(document).on('click', '[data-toggle="lightbox"]', function (event) {
    event.preventDefault();
    $(this).ekkoLightbox();
  });


  // Count Down JS
  $('#simple-timer').syotimer({
    year: 2022,
    month: 5,
    day: 9,
    hour: 20,
    minute: 30
  });

  //Hero Slider
  $('.hero-slider').slick({
    // autoplay: true,
    infinite: true,
    arrows: true,
    prevArrow: '<button type=\'button\' class=\'heroSliderArrow prevArrow tf-ion-chevron-left\'></button>',
    nextArrow: '<button type=\'button\' class=\'heroSliderArrow nextArrow tf-ion-chevron-right\'></button>',
    dots: true,
    autoplaySpeed: 7000,
    pauseOnFocus: false,
    pauseOnHover: false
  });
  $('.hero-slider').slickAnimation();


})(jQuery);
