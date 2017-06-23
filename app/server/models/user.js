
module.exports = function(sequelize, DataTypes) {
  const user = sequelize.define('user', {
    username: {
      type:DataTypes.STRING,
      allowNull:false,
    },
    email:{
      type:DataTypes.STRING,
      allowNull:false,
    },
    password:{
      type:DataTypes.STRING,
      allowNull:false,
    },
  }, {
    classMethods: {
      associate:(models)=> {
        user.hasMany(models.UserMessage,{
          foreignKey:'userId',
          as:'userMessage'
        })
        // associations can be defined here
      }
    }
  });
  return user;
};
