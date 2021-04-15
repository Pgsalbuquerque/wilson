'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('passagem', {
      id: {
         type: Sequelize.INTEGER,
         primaryKey: true,
         autoIncrement: true,
        }
      });

  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('passagem');
  }
};
