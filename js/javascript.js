

// function initializeSwiper() {
//     var swiperOptions = {
//       watchSlidesProgress: true,
//       navigation: {
//         nextEl: ".swiper-button-next",
//         prevEl: ".swiper-button-prev",
//       }
//     };

//     // Adjust the breakpoints and slidesPerView as needed
//     if (window.innerWidth <= 576) {
//       swiperOptions.slidesPerView = 1; // Show 1 slide on small screens
//     } else if (window.innerWidth <= 768) {
//       swiperOptions.slidesPerView = 2; // Show 2 slides on medium screens
//     } else if (window.innerWidth <= 992) {
//       swiperOptions.slidesPerView = 3; // Show 3 slides on large screens
//     } else {
//       swiperOptions.slidesPerView = 5; // Show 5 slides on extra large screens
//     }

//     var swiper = new Swiper(".mySwiper", swiperOptions);
//   }

//   // Initialize Swiper on load and on window resize
//   window.addEventListener("load", initializeSwiper);
//   window.addEventListener("resize", initializeSwiper);




  //  var $range = $(".js-range-slider"),
  //       $from = $(".from"),
  //       $to = $(".to"),
  //       range,
  //       min = $range.data('min'),
  //       max = $range.data('max'),
  //       from,
  //       to;

  //   var updateValues = function () {
  //       $from.prop("value", from);
  //       $to.prop("value", to);
  //   };

  //   $range.ionRangeSlider({
  //       onChange: function (data) {
  //           from = data.from;
  //           to = data.to;
  //           updateValues();
  //       }
  //   });

  //   range = $range.data("ionRangeSlider");
  //   var updateRange = function () {
  //       range.update({
  //           from: from,
  //           to: to
  //       });
  //   };

  //   $from.on("input", function () {
  //       from = +$(this).prop("value");
  //       if (from < min) {
  //           from = min;
  //       }
  //       if (from > to) {
  //           from = to;
  //       }
  //       updateValues();
  //       updateRange();
  //   });

  //   $to.on("input", function () {
  //       to = +$(this).prop("value");
  //       if (to > max) {
  //           to = max;
  //       }
  //       if (to < from) {
  //           to = from;
  //       }
  //       updateValues();
  //       updateRange();
  //   });

