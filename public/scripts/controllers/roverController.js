'use strict';
var app = app || {};

(function(module) {
  const roverController = {};

  // const today = new Date();
  // const yyyy = today.getFullYear();
  // const mm = today.getMonth() + 1;
  // const dd = today.getDate();

  roverController.commandView = () => {
    var pageURL = window.location.href;
    var urlDate = pageURL.substr(pageURL.lastIndexOf('/') + 1);
    var dateIn;
    if (urlDate === 'command-view') {
      dateIn = '2017-08-30';
    } else {
      dateIn = urlDate || '2017-08-30';
    }
    app.Curiosity.requestData(dateIn); // Testing date with full data
  };

  roverController.index = (date) => {
    var dateIn = date || '2017-08-30';
    $('#weather, #photos').html('');
    app.Curiosity.requestData(dateIn); // Testing date with full data
    // app.Curiosity.requestData(`${yyyy}-${mm}-${dd}`); // live date - (current date onload)
  };

  module.roverController = roverController;
})(app);
