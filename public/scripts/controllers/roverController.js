'use strict';
var app = app || {};

(function(module) {
  const roverController = {};

  const today = new Date();
  const yyyy = today.getFullYear();
  const mm = today.getMonth() + 1;
  const dd = today.getDate();

  roverController.index = () => {
    $('main').show();
    app.Rover.requestData(`${yyyy}-${mm}-${dd}`);
  };

  module.roverController = roverController;
})(app);
