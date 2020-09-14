$(function () {
  // object-fit-images
  objectFitImages();

  // Swiper
  new Swiper(".swiper-container", {
    loop: true,
    speed: 500,
    effect: "fade",
    loopAdditionalSlides: 1,
    autoplay: {
      delay: 5000,
    },
    breakpoints: {
      768: {
        height: 400,
      },
    },
  });

  // wow.js
  new WOW().init();

  // smooth scrolling
  $('a[href^="#"]').click(function () {
    var speed = 400;
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? "html" : href);
    var position = target.offset().top;
    $("body,html").animate({ scrollTop: position }, speed, "swing");
    return false;
  });

  // burger menu for mobile
  $(".header__burgerIconOuter").on("click", function () {
    if ($(".header__burgerIcon").hasClass("header__burger--open")) {
      $(".header__burgerIcon").removeClass("header__burger--open");
      $(".header__navLinks").removeClass("open");
      $("body").removeClass("header--lock");
    } else {
      $(".header__burgerIcon").addClass("header__burger--open");
      $(".header__navLinks").addClass("open");
      $("body").addClass("header--lock");
    }
  });
});
