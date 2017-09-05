// Load Express
// const pg = require('pg');
const express = require('express');
const requestProxy = require('express-request-proxy');

const app = express();

const PORT = process.env.PORT || 4000;

app.use(express.static('./public'));
//
app.listen(PORT, function() {
  console.log('Our app is listening on port ' + PORT);
});

app.get('/marsweather/*', proxyWeather);

function proxyWeather(req, res){
  console.log('Routing a Mars Weather AJAX request for ', req.params[0]);
  (requestProxy({
    url: `http://marsweather.ingenology.com/v1/archive/`,
    query: {'terrestrial_date_start': req.params[0]},
    headers: {}
  }))(req, res);
}

app.get('*', (request, response) => response.sendFile('index.html', {root: './public'}));
