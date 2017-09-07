'use strict';
var app = app || {};

(function(module) {
  const roverView = {};

  // const ui = function() {
  //
  // };

  // const render = Handlebars.compile($('#placeholder-template').text());

  // roverView.index = function() {
  //   // ui();
  //   // $('main').append(
  //   //   app.rover.with('name').map(render)
  //   // );
  // };

  roverView.populateAbout = function(about) {
    let template = Handlebars.compile($('#about-template').text());
    $('#about-details').append(template(about));
  }

  roverView.populateWeather = function(weather) {
    let template = Handlebars.compile($('#weather-template').text());
    $('#weather-details').append(template(weather));
  }

  roverView.populateFilters = function(images) {
    let template = Handlebars.compile($('#camera-template').text());
    images.map(camera => $('#camera-filter').append(template({val: camera})));
  }

  roverView.populatePhotos = function(images) {
    let template = Handlebars.compile($('#photos-template').text());
    images.photos.map(image => $('#photos-rotation').append(template(image)));
    $('#photos-rotation').slick({
      centerMode: true,
      slidesToShow: 3,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            centerMode: true,
            centerPadding: '15px',
            slidesToShow: 1
          }
        }
      ]
    });
    //$('#photos-rotation').append(template(images.photos));
  }

  module.roverView = roverView;
})(app);

$(function() {
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

});
