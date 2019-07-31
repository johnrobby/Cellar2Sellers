//this is where I need to setup the scheme (columns of a table)
//look at the profile.js as an example of adding data to the columns.
module.exports = function(sequelize, DataTypes) {
    var Wine = sequelize.define("Wine", {
      text: DataTypes.STRING,
      description: DataTypes.TEXT
    });
    return Wine;
  };
  