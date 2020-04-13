const Eureka = require('eureka-js-client').Eureka;
module.exports = { clientEureka: new Eureka({
  // application instance information
  instance: {
    app: 'nodejs-service',
    hostName: 'localhost',
    instanceId: 'nodejs-service',
    ipAddr: '127.0.0.1',
    statusPageUrl: 'http://localhost:3000/info',
    port: {
      '$': 3000,
      '@enabled': true,
    },
    vipAddress: 'nodejs-service',
    dataCenterInfo: {
      '@class': 'com.netflix.appinfo.InstanceInfo$DefaultDataCenterInfo',
      name: 'MyOwn',
    },
  },
  eureka: {
    // eureka server host / port
    host: 'localhost',
    port: 8761,
    servicePath: '/eureka/apps/'
  },
})
};
