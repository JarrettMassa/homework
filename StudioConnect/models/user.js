module.exports = function(connection, DataTypes) {
  var User = connection.define("User", {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: DataTypes.STRING
  });
  return User;
};