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

    // Profile.beforeCreate((profile, options) => {
    //   const salt = bcrypt.genSaltSync();
    //   profile.password = bcrypt.hashSync(profile.password, salt);
    // });

    // Profile.prototype.validatePass = function(password){
    //   return bcrypt.compareSync(password, this.password);
    // };

    return Profile;
  };
  