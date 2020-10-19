module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.removeColumn('Users', 'password', { transaction: t }),
      ]);
    });
  },
  down: (queryInterface, Sequelize) => {
     
  }
};