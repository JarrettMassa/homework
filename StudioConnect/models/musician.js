module.exports = function(connection, DataTypes) {
  var Musician = connection.define("Musician", {
    email: DataTypes.STRING,
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
  });
  return Musician;
};
