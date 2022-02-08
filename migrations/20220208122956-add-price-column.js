const { query } = require("express");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn(
      'drummers',
      'price',
      {
        type: Sequelize.FLOAT,
        default: 0,
      },
    );

    await queryInterface.sequelize.query('UPDATE drummers SET price = 5.99');
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('drummers', 'price');
  },
};
