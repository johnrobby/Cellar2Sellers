module.exports = function(sequelize, DataTypes) {
    var Profile = sequelize.define("Profile", {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      username: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      }
    });
    Profile.associate = function(models) {
      // Associating Author with Posts
      // When an Author is deleted, also delete any associated Posts
      Profile.hasMany(models.Wine, {
        onDelete: "cascade"
      });
    };
  
  
    return Profile;
  };
  