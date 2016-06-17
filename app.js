var express = require('express');
var bodyParser = require('body-parser');
var albums = require('./albums');

var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', function(req, res) {
  res.send('CDDB Application');
});

app.get('/albums', function(req, res) {
  res.json(albums);
});

app.get('/albums/random', function(req, res) {
  var i = Math.floor(Math.random() * albums.length);
  res.json(albums[i]);
});

app.get('/albums/:id', function(req, res) {
  var i = req.params.id - 1;
  if(0 <= i && i < albums.length) {
    return res.json(albums[i]);
  } else {
    return res.status(404).send("Album Not Found");
  }
});

app.post('/albums', function(req, res) {
  var album = {
    artist: req.body.artist,
    title: req.body.title,
    year: req.body.year
  }

  if(album.artist && album.title && album.year) {
    albums.push(album);
    // Add 'Location: /albums/:id' to headers
    return res.status(201).send('Created');
  } else {
    return res.status(400).send('Bad Request');
  }
});

app.put('/albums/:id', function(req, res) {
  // TODO
});

app.delete('/albums/:id', function(req, res) {
  var i = req.params.id - 1;
  if(0 <= i && i < albums.length) {
    albums.splice(i, 1);
    return res.status(200).send('OK');
  } else {
    return res.status(404).send('Not Found');
  }
});

var port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log("listening on port " + port);
});
