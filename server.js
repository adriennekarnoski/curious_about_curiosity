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

function proxyNasa(request, response) {
  console.log('Routing GitHub request for', request.params[0]);
  (proxyNasa({
    url: `https://api.nasa.gov/${request.params[0]}`,
    headers: {Authorization: `token ${process.env.NASA_TOKEN}`}
  }))(request, response);
}

app.get('/api.nasa.gov/*', proxyNasa);
app.get('*', (request, response) => response.sendFile('index.html', {root: './public'}));
