'use strict';
var app = app || {};

(function(module) {
  const roverController = {};

  roverController.index = () => {
    $('main').show();
    app.rovers.requestRovers(app.roverView.index);
  };

  module.roverController = roverController;
})(app);
