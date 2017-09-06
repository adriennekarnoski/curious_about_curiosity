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

  module.roverView = roverView;
})(app);

$(document).ready(function() {
  $(function() {
    $('#popupDatePicker').datepick({
      dateFormat: 'yyyy-mm-dd',
      onSelect: function() {
        $('#weather-details').html('');
        app.roverController.index(this.value)
      }
    });
  });
});
