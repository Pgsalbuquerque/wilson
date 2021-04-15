'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('passagem', "client_cpf" , 
    {
      type: Sequelize.STRING,
      references: {model: 'client', key: "cpf"},
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    },
    );

  },

  down: async (queryInterface) => {
    await queryInterface.removeColumn('passagem', "client_cpf");

  }
};