module.exports = function(sequelize, DataTypes) {
    var Wine = sequelize.define("Wine", {
      text: DataTypes.STRING,
      description: DataTypes.TEXT
    });
    return Wine;
  };
  