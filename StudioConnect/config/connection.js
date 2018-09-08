var Sequelize = require("sequelize");

var connection = new Sequelize("connect_db", "root", "12345678", {
    host: "localhost",
    port: 3306,
    dialect: "mysql",
    pool: {
       max: 5,
       min: 0,
       idle: 10000
    }
});

module.exports = connection;
