module.exports = (sequelize, DataTypes)=> {
  const Group = sequelize.define('Group', {
    groupName: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: (models)=> {
        // associations can be defined here
      }
    }
  });
  return Group;
};
