module.exports = function(connection, DataTypes) {
  var Studio = connection.define("Studio", {
    name: DataTypes.STRING,
    address_1: DataTypes.STRING,
    address_2: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    zip: DataTypes.INTEGER,
    email: DataTypes.STRING,
    description: DataTypes.STRING,
    price: DataTypes.DECIMAL,
    equipment: DataTypes.STRING
  });
  return Studio;
};