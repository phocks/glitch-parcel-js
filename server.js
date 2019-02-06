const express = require('express');
const app = express();

app.use(express.static('dist'));

app.get("/", function (request, response) {
  response.sendFile(__dirname + '/dist/index.html');
});

var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});