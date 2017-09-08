'use strict';
var app = app || {};

(function(module) {
  const Curiosity = {};

  Curiosity.requestData = function(earthDate) {
    Curiosity.all = [];
    $.get('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/?api_key=IF11OEuvNrLuSk4UFvRqxhJYOPtYX5eecaMi82Eh')
      .then(function(data) {
        Curiosity.all.push(data);
        app.roverView.populateAbout(data);
        err => console.error(err)
      })
      .then(
        $.get('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?api_key=IF11OEuvNrLuSk4UFvRqxhJYOPtYX5eecaMi82Eh&earth_date=' + earthDate)
          .then(function(data) {
            Curiosity.all.push(data);
            app.roverView.renderPhotos(data);
            app.roverView.populatePhotos(data);
            app.roverView.populateFilters(Curiosity.verifyImages(data));
            err => console.error(err)
          })
          .then(
            $.get('/marsweather/' + earthDate)
              .then(function(data) {
                Curiosity.all.push(data);
                app.roverView.populateWeather(data);
                err => console.error(err);
              })
          )
      )
      .then(Curiosity.all);
  };

  Curiosity.verifyImages = (images) => {
    return images.photos.map(img => img.camera.name)
    .reduce((list, name) => { if(! list.includes(name))list.push(name);
      return list }, []);
  };

  module.Curiosity = Curiosity;
})(app);
