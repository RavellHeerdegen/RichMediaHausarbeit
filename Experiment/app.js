/* Für CSS compression muss der folgende require aktiv sein */
// var compression = require('compression');
var express = require('express');
var app = express();
var path = require('path');

/* Für CSS compression muss der folgende Use aktiv sein */
// app.use(compression()); // Muss für Gzip compression aktiv sein

app.use(express.static(__dirname + "/public"));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/html_pages/index.html'));
});

app.get('/async', function(req, res) {
    res.sendFile(path.join(__dirname + '/html_pages/async_css.html'));
});

app.get('/criticalHead', function(req, res) {
    res.sendFile(path.join(__dirname + '/html_pages/criticalHead.html'));
});

app.get('/criticalStyles', function(req, res) {
    res.sendFile(path.join(__dirname + '/html_pages/criticalStyles.html'));
});

app.get('/cSSSprites', function(req, res) {
    res.sendFile(path.join(__dirname + '/html_pages/CSSSprites.html'));
});

app.get('/importInCSS', function(req, res) {
    res.sendFile(path.join(__dirname + '/html_pages/importInCSS.html'));
});

app.get('/inlineCSS', function(req, res) {
    res.sendFile(path.join(__dirname + '/html_pages/inlineCSS.html'));
});

app.get('/compressedCSS', function(req, res) {
    res.sendFile(path.join(__dirname + '/html_pages/compressedCSS.html'));
});

app.listen(8080,()=>{
    console.log("app is listening on port 8080");
});