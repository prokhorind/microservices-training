// Set up mongoose connection
const mongoose = require('mongoose');


//let dev_db_url = 'mongodb://klebanoff:abcd1234@ds123619.mlab.com:23619/productstutorial';
 let dev_db_url = 'mongodb+srv://klebanoff:welcome123@cluster0-g9ilk.gcp.mongodb.net/Users?retryWrites=true&w=majority'

const mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
const db = mongoose.connection;

module.exports.db = db;
