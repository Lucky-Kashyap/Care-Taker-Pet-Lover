// Owl Carousel

$(document).ready(function () {
    $("#owl-demo").owlCarousel({
      loop: true,
      margin: 10,
      nav: false,
      dots: false,
      resposive: {
        0: {
          items: 1,
        },
        600: {
          items: 3,
        },
        1000: {
          items: 1,
        },
      },
    });
  });