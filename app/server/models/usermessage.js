
module.exports = (sequelize, DataTypes)=> {
  const UserMessage = sequelize.define('UserMessage', {
    username:{
      type:DataTypes.STRING,
      allowNull:false,
    },
    content: {
      type:DataTypes.STRING,
      allowNull:false,
    },
    complete:{
      type:DataTypes.BOOLEAN,
      defaultValue:false,
    },
  }, {
    classMethods: {
      associate: (models)=> {
        UserMessage.belongsTo(models.user,{
          foreignKey:'userId',
          onDelete:'CASCADE',
        });
        // associations can be defined here
      },
    },
  });
  return UserMessage;
};
