"use strict";
exports.__esModule = true;
var Sequelize = require("sequelize");
var config = require("../config/config.js");
const sequelize = new Sequelize("test", "sa", "Sql123$", {
    host: "localhost",
    port: 1433,
    dialect: "mssql"
});
// exports.sequelize.authenticate();

var test = sequelize.authenticate()
.then(function () {
    console.log("CONNECTED! ");
})
.catch(function (err) {
    console.log("FAILED", err);
})

const User = sequelize.define('user', {
    username: Sequelize.STRING,
    birthday: Sequelize.DATE
  });
  
  sequelize.sync()
    .then(() => User.create({
      username: 'aravinth',
      birthday: new Date(1995, 10, 27)
    }))
    .then(jane => {
      console.log(jane.toJSON());
    });

    // User.find()