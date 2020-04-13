var appzip = require('appmetrics-zipkin')({
  host: 'localhost',
  port: 9411,
  serviceName:'nodejs-service',
  sampleRate: 1.0
});

var express = require('express');
var eurekaConfig = require('./eureka/eureka');
const bodyParser = require('body-parser');
const userRoute = require('./routes/user.route');
var appConfig = express();

appConfig.use(bodyParser.json());
appConfig.use(bodyParser.urlencoded({extended: false}));
appConfig.use('/users', userRoute);

eurekaConfig.clientEureka.start();

module.exports.appConfig = appConfig;
