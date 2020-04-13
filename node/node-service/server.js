const {appConfig: app} = require('./myapp');
const dbConfig = require('./dbconfig');
var port = process.env.PORT || 3000;


dbConfig.db.on('error', console.error.bind(console, 'MongoDB connection error:'));

var server = app.listen(port, function() {
  console.log('Express server listening on port ' + port);
});
