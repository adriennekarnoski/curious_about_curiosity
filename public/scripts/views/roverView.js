'use strict';
var app = app || {};

(function(module) {
  const roverView = {};

  const ui = function() {

  };

  const render = Handlebars.compile($('#placeholder-template').text());

  roverView.index = function() {
    ui();
    $('main').append(
      app.rovers.with('name').map(render)
    );
  };

  module.roverView = roverView;
})(app);
