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
    Wine.associate = function(models) {
      // We're saying that a Post should belong to an Author
      // A Post can't be created without an Author due to the foreign key constraint
      Wine.belongsTo(models.Profile, {
        foreignKey: {
          allowNull: false
        }
      });
    };
  
       return Wine;
  };
  