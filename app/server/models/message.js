module.exports = (sequelize, DataTypes)=> {
  const Message = sequelize.define('Message', {
    body: DataTypes.STRING,
    groupId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: (models) =>{
        // associations can be defined here
      }
    }
  });
  return Message;
};
