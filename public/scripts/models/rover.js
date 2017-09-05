'use strict';
var app = app || {};

(function(module) {
  const Rover = {};

  Rover.all = [];

  Rover.requestData = function(earthDate) {
    $.get('http://mars-photos.herokuapp.com/api/v1/rovers/Curiosity')
      .then(details => Rover.all.push(details), err => console.error(err))
    $.get('http://mars-photos.herokuapp.com/api/v1/rovers/Curiosity/photos?earth_date=' + earthDate)
      .then(photos => Rover.all.push(photos), err => console.error(err))
    $.get('/marsweather/'+earthDate)
      .then(weather => Rover.all.push(weather), err => console.error(err))
    .then(app.Rover.mergeData);
  };

  Rover.mergeData = function() {
    Rover.cameras = [];
    console.log(Rover.all);
  }

  // rover.with = attr => rover.photos.filter(rover => rover[attr]);

  module.Rover = Rover;
})(app);
