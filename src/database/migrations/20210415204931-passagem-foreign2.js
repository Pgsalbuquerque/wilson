'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('passagem', "cidade_destino" , 
    {
      type: Sequelize.STRING,
      references: {model: 'cidade', key: "nome"},
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    },
    );

  },

  down: async (queryInterface) => {
    await queryInterface.removeColumn('passagem', "cidade_destino");

  }
};