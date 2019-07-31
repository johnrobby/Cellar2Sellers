//this is where I need to setup the scheme (columns of a table)
//look at the profile.js as an example of adding data to the columns.
module.exports = function(sequelize, DataTypes) {
    var Wine = sequelize.define("Wine", {
      title: DataTypes.STRING,
      country: DataTypes.STRING,
      appelation: DataTypes.STRING,
      vintage: DataTypes.INTEGER,
      cost: DataTypes.DECIMAL(10,2),
      website: DataTypes.STRING,
      sale: DataTypes.BOOLEAN
    });
    return Wine;
  };
  