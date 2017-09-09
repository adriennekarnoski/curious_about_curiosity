'use strict';
var app = app || {};

(function(module) {
  const roverView = {};

  roverView.populateAbout = function() {
    let template = Handlebars.compile($('#about-template').text());

    app.Curiosity.all[1].rover.cameras.forEach(function(ele, i) {
      $.extend(ele, app.cameraModel.properties[i]);
    })

    $('#about-details').append(template(app.Curiosity.all[1]));

    function createStats() {
      let template = Handlebars.compile($('#stats-template').text());
      $('#stats-details').append(template(app.cameraModel.stats));
    }
    function createRover() {
      let template = Handlebars.compile($('#rover-template').text());
      $('#rover-details').append(template(app.Curiosity.all[1].rover));
    }
    createRover();
    createStats();
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
    if ($('#photos-rotation').length > 0) {
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
  }

  roverView.populateFilters = function(images) {
    let template = Handlebars.compile($('#camera-template').text());
    images.map(camera => $('#camera-filter').append(template({val: camera})));
  }

  module.roverView = roverView;
})(app);

$(function() {
  if ($('#popupDatePicker').length > 0) {
    var $input = $('#popupDatePicker').pickadate()
    var picker = $input.pickadate('picker');
    picker.set('max', new Date())
    picker.on('close', function() {
      var selected = picker.get('select', 'yyyy-mm-dd');
      app.roverController.index(selected);
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
  });

});
