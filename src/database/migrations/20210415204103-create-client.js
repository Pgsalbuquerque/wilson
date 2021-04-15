'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('client', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
       },
      cpf: {
        type: Sequelize.STRING,
        primaryKey: true,
      }
      });

  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('client');
  }
};
