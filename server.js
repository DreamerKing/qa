const express = require('express');
// const webpack = require('webpack');
const proxy = require('http-proxy-middleware');
const historyFallback = require('connect-history-api-fallback');
const config = require('./config.json');

const app = express();
let proxyPort = config.proxy.port ? `:${config.proxy.port}`:'';

const proxyOptions = {
  target: `${config.proxy.url}${proxyPort}`, //转发地址
  changeOrigin: true,
};

app.use(historyFallback());
app.use('/', express.static("public"));
app.use('/api', proxy(proxyOptions));


const server = app.listen(config.server.port, function() {
  const port = server.address().port;
  console.log("Server running at http://localhost:%s", port);
});
