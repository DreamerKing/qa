const express = require('express');
// const webpack = require('webpack');
const path = require('path');
const proxy = require('http-proxy-middleware');
const historyFallback = require('connect-history-api-fallback');
const ejs = require('ejs');
const config = require('./config.json');

const app = express();
let proxyPort = config.proxy.port ? `:${config.proxy.port}`:'';

const proxyOptions = {
  target: `${config.proxy.url}${proxyPort}`, //转发地址
  changeOrigin: true,
};

app.use(express.static("public"));
app.set('views', path.join(__dirname, "public", "resource"));
app.engine('html', ejs.__express);
app.set('view engine', 'html');

app.get('/', function (req, res, next) {
  res.redirect('/student');
});
app.get('/student(/?*)', function (req, res, next) {
  res.render('student/index',{});
});
app.get('/operator(/?*)', function (req, res, next) {
  res.render('operator/index',{});
});
app.get('/mam(/?*)', function (req, res, next) {
  res.render('mam/index',{});
});
app.get('/principal(/?*)', function (req, res, next) {
  res.render('principal/index',{});
});

app.use('/api', proxy(proxyOptions));
app.use(historyFallback());
const server = app.listen(config.server.port, function() {
  const port = server.address().port;
  console.log("Server running at http://localhost:%s", port);
});
