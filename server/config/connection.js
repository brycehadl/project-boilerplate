const mongoose = require('mongoose');
console.log(MONGODB_URI)
mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/grocerytab');

module.exports = mongoose.connection;
