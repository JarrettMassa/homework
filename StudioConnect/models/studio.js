module.exports = function(connection, DataTypes) {
  var Studio = connection.define("Studio", {
    email: DataTypes.STRING,
    name: DataTypes.STRING,
    address_1: DataTypes.STRING,
    address_2: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    zip: DataTypes.INTEGER,
    photo_url: DataTypes.STRING,
    description: DataTypes.STRING,
    equipment: DataTypes.STRING,
    price: DataTypes.DECIMAL
  });
  return Studio;
};
