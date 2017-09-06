'use strict';
var app = app || {};

(function(module) {
  const roverController = {};

  // const today = new Date();
  // const yyyy = today.getFullYear();
  // const mm = today.getMonth() + 1;
  // const dd = today.getDate();

  roverController.index = () => {
    $('main').show();
    app.Curiosity.requestData(`2012-08-08`); // Testing date with full data
    // app.Curiosity.requestData(`${yyyy}-${mm}-${dd}`); // live date - (current date onload)
  };

  module.roverController = roverController;
})(app);
