'use strict';
var app = app || {};

(function(module) {
  const rover = {};
  rover.all = [];
  rover.requestRovers = function(callback) {
    $.get('/github/user/repos')
    .then(data => rovers.all = rover, err => console.error(err))
    .then(callback);
  };

  rovers.with = attr => rovers.all.filter(rover => rover[attr]);

  module.rovers = rovers;
})(app);
