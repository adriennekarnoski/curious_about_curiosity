'use strict';
var app = app || {};

(function(module) {
  const roverView = {};

  roverView.populateAbout = function(about) {
    let template = Handlebars.compile($('#about-template').text());
    $('#about-details').append(template(about));
  }

  roverView.populateWeather = function(weather) {
    let template = Handlebars.compile($('#weather-template').text());
    if (weather.results.length !== 0) {
      $('#details').append(template(weather));
    }
  }

  roverView.renderPhotos = function(images) {
    let template = Handlebars.compile($('#photos-template').text());
    if (images.photos.length !== 0) {
      $('#details').append(template(images));
    }
  }

  roverView.populatePhotos = function(images) {
    let template = Handlebars.compile($('#photos-each').text());
    images.photos.map(image => $('#photos-rotation').append(template(image)));
    $('#photos-rotation').slick({
      slidesToShow: 3,
      infinite: false,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            centerPadding: '15px',
            slidesToShow: 1
          }
        }
      ]
    });
  }

  roverView.populateFilters = function(images) {
    let template = Handlebars.compile($('#camera-template').text());
    images.map(camera => $('#camera-filter').append(template({val: camera})));
  }

  module.roverView = roverView;
})(app);

$(function() {
  if ($('#popupDatePicker').length > 0) {
    $('#popupDatePicker').datepick({
      maxDate:  new Date(),
      dateFormat: 'mm-dd-yyyy',
      onSelect: function() {
        $('#weather-details').html('');
        var selected = $('#popupDatePicker').datepick('getDate');
        selected = new Date(selected);
        var setDate = selected.getFullYear() + '-' + (selected.getMonth() + 1) + '-' + selected.getDate();
        app.roverController.index(setDate);
      }
    });
  }

  function hoverBg() {
    var movementStrength = 25;
    var height = movementStrength / $(window).height();
    var width = movementStrength / $(window).width();
    if ($(window).width() > 992) {
      $('.command-view').on('mousemove', function(e){
        var pageX = e.pageX - ($(window).width() / 2);
        var pageY = e.pageY - ($(window).height() / 2);
        var newvalueX = width * pageX * -1 - 25;
        var newvalueY = height * pageY * -1 - 50;
        $('.command-view').css('background-position', newvalueX+'px '+newvalueY+'px');
      });
    } else {
      $('.command-view').removeAttr('style').off('mousemove');
    }
  }

  var buffer = false;
  $(window).on('resize', function() {
    if (buffer !== false) {
      clearTimeout(buffer);
    }
    buffer = setTimeout(function(){
      hoverBg();
    }, 250);
  });

  hoverBg();

  $(document).on('change', '#camera-filter', function() {
    $('#photos-rotation').slick('unslick');
    $('#photos-rotation img').hide();
    if ($(this).val() !== '') {
      $('#photos-rotation img[data-camera="'+$(this).val()+'"]').show();
    } else {
      $('#photos-rotation img').show()
    }
    $('#photos-rotation').slick({
      slidesToShow: 2,
      infinite: false,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            centerPadding: '15px',
            slidesToShow: 1
          }
        }
      ]
    });
  });

  // $('#nav').load('nav.html');
  $('.footer-clean').load('footer.html');

});
