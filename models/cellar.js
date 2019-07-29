module.exports = function(sequelize, DataTypes) {
    var cellar = sequelize.define("wines", {
      wine_name: DataTypes.STRING,
      country: DataTypes.STRING,
      appelation: DataTypes.STRING,
      vintage: DataTypes.NUMBER,
      tasting_notes: DataTypes.STRING,
      cost:  DataTypes.NUMBER,
      
       
    }, {
      classMethods: {
        associate: function(models) {
          // associations can be defined here
        }
      }
    });
    return cellar;
  };