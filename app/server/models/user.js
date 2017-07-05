
module.exports = (sequelize, DataTypes)=> {
  const user = sequelize.define('user', {
    username:DataTypes.STRING ,
    email:DataTypes.STRING,
    password:DataTypes.STRING,
  }, {
    classMethods: {
      associate:(models)=> {
        user.hasMany(models.Message,{foreignKey:'userId'});
        user.hasMany(models.groupMember, {foreignKey: 'user_id'});

      }
    }
  });
  return user;
};
