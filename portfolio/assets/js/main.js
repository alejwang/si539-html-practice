"use strict";

// Preloader

var ssPreloader = function() {

  $(window).on('load', function() {

    $('html, body').animate({
      scrollTop: 0
    }, 'normal');

    $("#preloader").fadeOut("slow", function() {

      $("#preloader-container").delay(300).fadeOut("slow");

    });
  });
};

(function ssInit() {
  ssPreloader();
})();

$(document).ready(function() {

  // Bg Fadeout
  setTimeout(function() {
    $(".background").fadeIn(1000);
  }, 1000);


  // Sidebar menu
  $('#sidenav-trigger').click(function(){
    $('#sidenav').css('width','+=250px');
    $("#right-container, header, footer").css({
      "margin-left": "+=250px",
      "opacity": "0.3"
    });
  });
  $('#sidenav-close').click(function(){
    $('#sidenav').css('width','-=250px');
    $("#right-container, header, footer").css({
      "margin-left": "-=250px",
      "opacity": "1"
  });
});

  // Preload images
  function preload(arrayOfImages) {
    $(arrayOfImages).each(function() {
      $('<img/>')[0].src = this;
    });
  }
  preload([
    "http://alej.wang/images/mobile-banner.png",
    "http://alej.wang/images/smartpill-banner.png",
    "http://alej.wang/images/inforest-banner.png",
    "http://alej.wang/images/edge-banner.png",
    "http://alej.wang/images/civicrm-banner.png",
    "http://alej.wang/images/about-banner.png"
  ]);

  // Handler for about
  $('#handleAbout').click(function() {
    $('#about-info').collapse('show');
  });

  // Card animation
  $('.collapse').on('hide.bs.collapse', function() {
    var styles = {
      backgroundImage: 'url("./images/blank-banner.png")'
    }
    $(".background").css(styles);
    $("#" + $(this).attr('aria-labelledby') + " > h2").removeClass('word-underlined');
    $("#" + $(this).attr('aria-labelledby') + " > h2").blur();
  });

  $('.collapse').on('shown.bs.collapse', function() {
    var styles = {
      backgroundImage: 'url(' + $(this).attr('data-image') + ')'
    }
    $(".background").css(styles);
    $("#" + $(this).attr('aria-labelledby') + " > h2").addClass('word-underlined');
  });

  // Tab Accessibility
  $('h2[data-toggle="collapse"]').focus(function() {
    $($(this).attr('data-target')).collapse('show');
  });


});
