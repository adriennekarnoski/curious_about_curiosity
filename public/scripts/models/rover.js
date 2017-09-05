'use strict';
var app = app || {};

(function(module) {
  const Curiosity = {};

  Curiosity.all = [];

  Curiosity.requestData = function(earthDate) {
    $.get('http://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/?api_key=IF11OEuvNrLuSk4UFvRqxhJYOPtYX5eecaMi82Eh')
      .then(function(details) {
        Curiosity.all.push(details);
        app.roverView.populateAbout(details);
      })
      .then(details => Curiosity.all.push([details]), err => console.error(err))
    $.get('http://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?api_key=IF11OEuvNrLuSk4UFvRqxhJYOPtYX5eecaMi82Eh&earth_date=' + earthDate)
      .then(function(photos) {
        Curiosity.all.push(photos);
        app.roverView.populateFilters(Curiosity.verifyImages(photos));
      })
    $.get('/marsweather/'+earthDate)
      .then(weather => Curiosity.all.push([weather]), err => console.error(err))
    .then(app.Curiosity.mergeData);
  };

  Curiosity.verifyImages = (images) => {
    return images.photos.map(img => img.camera.name)
    .reduce((list, name) => { if(! list.includes(name))list.push(name);
      return list }, []);
  };

  Curiosity.mergeData = function() {
    // let merged = [].concat.apply([], Curiosity.all);
    console.log(Curiosity.all);
  }

  // rover.with = attr => rover.photos.filter(rover => rover[attr]);

  module.Curiosity = Curiosity;
})(app);
