module.exports = function(sequelize, DataTypes) {
    var Wine = sequelize.define("Wine", {
      title: DataTypes.STRING,
      country: DataTypes.STRING,
      appelation: DataTypes.STRING,
      vintage: DataTypes.DATE,
      cost: DataTypes.DECIMAL(10,2),
      website: DataTypes.STRING,
      sale: DataTypes.BOOLEAN
    });

    // Wine.associate = function(models) {
    //   Wine.belongsTo(models.Profile, {
    //     foreignKey: {
    //       allowNull: false
    //     }
    //   });
    // };
  
       return Wine;
  };
  