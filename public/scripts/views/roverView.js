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

  roverView.populateAbout = function(details) {
    console.log(details);
    let template = Handlebars.compile($('#about-template').text());
    $('#about-details').append(template(details));
  }

  roverView.populateFilters = function(images) {
    let template = Handlebars.compile($('#camera-template').text());
    images.map(camera => $('#camera-filter').append(template({val: camera})));
  }

  module.roverView = roverView;
})(app);
