module.exports = function(sequelize, DataTypes) {
    const bcrypt = require('bcrypt');
    var Profile = sequelize.define("Profile", {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      username: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        len: [1]
      }
    });

    Profile.beforeCreate((profile, options) => {
      const salt = bcrypt.genSaltSync();
      profile.password = bcrypt.hashSync(profile.password, salt);
    });

    Profile.prototype.validatePass = function(password){
      return bcrypt.compareSync(password, this.password);
    };
    
    return Profile;
  };
  