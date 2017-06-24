
module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable('UserMessages', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      username: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      content: {
        type: Sequelize.STRING,
      },
      complete: {
        type: Sequelize.BOOLEAN,
        defaultValue:false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      userId:{
        type: Sequelize.INTEGER,
        onDelete:'CASCADE',
        /*references:{
          model:'users',
          key:'id',
          as:'userId',
        },*/
      },
    }),
  down: (queryInterface /*, Sequelize*/) => queryInterface.dropTable('UserMessages'),
};
