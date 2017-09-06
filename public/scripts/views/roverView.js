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
    roverView.handleFilter();
  }

  roverView.handleFilter = function() {
    $('#camera-filter').on('change', function() {
      const photoArray = app.Curiosity.all[2].photos;
      function findImage(ele) {
        return ele.camera.name === $('#camera-filter').val();
      }
        console.log((photoArray.find(findImage)).img_src);
      $('#img-container').html('<img src="'+ photoArray.find(findImage).img_src +'" />');
    })

  }


  module.roverView = roverView;
})(app);

$(document).ready(function() {
  $(function() {
    $('#popupDatePicker').datepick({
      dateFormat: 'yyyy-mm-dd',
      onSelect: function() {
        console.log(this.value);
      }
    });
  });
});
