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
    $('main').show();
    app.Curiosity.requestData(dateIn); // Testing date with full data
  };

  roverController.index = (date) => {
    var dateIn = date || '2017-08-30';
    $('main').show();
    app.Curiosity.requestData(dateIn); // Testing date with full data
    // app.Curiosity.requestData(`${yyyy}-${mm}-${dd}`); // live date - (current date onload)
  };

  $(document).ready(function() {
  var movementStrength = 25;
  var height = movementStrength / $(window).height();
  var width = movementStrength / $(window).width();
  $(".command-view").mousemove(function(e){
            var pageX = e.pageX - ($(window).width() / 2);
            var pageY = e.pageY - ($(window).height() / 2);
            var newvalueX = width * pageX * -1 - 25;
            var newvalueY = height * pageY * -1 - 50;
            $('.command-view').css("background-position", newvalueX+"px     "+newvalueY+"px");
    console.log('working');
  });
  });

  module.roverController = roverController;
})(app);
