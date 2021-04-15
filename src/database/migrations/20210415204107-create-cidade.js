'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('cidade', {
       id: {
         type: Sequelize.INTEGER,
         autoIncrement: true,
        },
        nome: {
          type: Sequelize.STRING,
          primaryKey: true
        }
      });

  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('cidade');

  }
};
