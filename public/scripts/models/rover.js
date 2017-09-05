'use strict';
var app = app || {};

(function(module) {
  const curiosity = {};
  // array of objects
  //all info included
  curiosity.arrayOfData;

  curiosity.getImages = function() {
    $.get('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=1&api_key=H6VureuzwrWf5iRfUqlqhmmo2n29Mwhw1er08xxj').then(data => curiosity.arrayOfData = data.photos);
    console.log('data is available')

    return curiosity.arrayOfData;
  };

  //array of camera names
  curiosity.cameraArray;
  //creates array of camera objects
  curiosity.verifyImages = () => {
    return app.curiosity.arrayOfData.map(img => img.camera.name)
    .reduce((list, name) => { if(! list.includes(name))list.push(name);
      return list }, []);

      // return curiosity.cameraArray;
  };

  curiosity.getImages(function() {
    app.roverView.populateFilters()
  });

  module.curiosity = curiosity;
})(app);
