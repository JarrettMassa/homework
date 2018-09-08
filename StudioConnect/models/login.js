module.exports = function(connection, DataTypes) {
    var Login = connection.define("Login", {
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        type: DataTypes.STRING
    });
    return Login;
  };