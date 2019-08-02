module.exports = function(sequelize, DataTypes) {
  var Profile = sequelize.define("Profile", {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    username: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  // Profile.associate = function(models) {
  //   Profile.hasMany(models.Wine, {
  //     as: 'Wine',
  //     foreignkey: 'ProfileId'
  //   });
  // };

  return Profile;
};
