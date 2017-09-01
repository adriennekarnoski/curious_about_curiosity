'use strict';
var app = app || {};

(function(module) {
  const rovers = {};
  rovers.all = [];
  rovers.requestRovers = function(callback) {
    $.get('/github/user/repos')
    .then(data => rovers.all = data, err => console.error(err))
    .then(callback);
  };

  rovers.with = attr => rovers.all.filter(rover => rover[attr]);

  module.rovers = rovers;
})(app);
