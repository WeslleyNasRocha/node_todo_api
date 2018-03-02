const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://admin:admin@ds011820.mlab.com:11820/todo-app');

module.exports = { mongoose };
