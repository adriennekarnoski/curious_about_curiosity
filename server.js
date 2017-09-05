// Load Express
const pg = require('pg');
const express = require('express');
const requestProxy = require('express-request-proxy');

const app = express();

const PORT = process.env.PORT || 4000;

app.use(express.static('./public'));

app.listen(PORT, function() {
  console.log('Our app is listening on port ' + PORT);
});

/*

function proxyWeather(request, response) {
  console.log(request.params);
  console.log('Routing Rover request for', request.params[0]);
  (proxyWeather({
    url: `http://marsweather.ingenology.com/${request.params[0]}`
  }))(request, response);
}

app.get('/v1/*', proxyWeather);

*/

app.get('*', (request, response) => response.sendFile('index.html', {root: './public'}));
