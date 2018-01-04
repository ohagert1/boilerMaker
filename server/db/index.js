const Sequelize = require('sequelize');
const dbName = 'placeholder';
const PORT = 6969;

//must createDb with dbName
//match up port correctly
//define models in ./models
//sync with force: true in main.js

const db = new Sequelize('postgres://localhost:'+PORT+'/'+dbName, {
  logging: false // unless you like the logs
  // ...and there are many other options you may want to play with
});

module.exports = db;
