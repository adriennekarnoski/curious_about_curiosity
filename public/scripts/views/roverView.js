'use strict';
var app = app || {};

(function(module) {
  const roverView = {};

  // const ui = function() {
  //
  // };
  roverView.populateFilters = function() {

    let template = Handlebars.compile($('#camera-template').text());
    app.curiosity.verifyImages().map(camera => $('#camera-filter').append(template({val: camera})));


  }

  // const render = Handlebars.compile($('#placeholder-template').text());
  //
  // roverView.index = function() {
  //   ui();
  //   $('main').append(
  //     app.rovers.with('name').map(render)
  //   );
  // };

  module.roverView = roverView;
})(app);
