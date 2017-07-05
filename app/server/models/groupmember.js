module.exports = (sequelize, DataTypes) =>{
  const groupMember = sequelize.define('groupMember', {
    groupId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate:(models) => {
        // associations can be defined here
      }
    }
  });
  return groupMember;
};
