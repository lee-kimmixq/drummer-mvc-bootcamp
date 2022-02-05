module.exports = {
  up: async (queryInterface) => {
    const drummersList = [
      {
        name: 'zaver',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'ck',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'kimmi',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'graham',
        created_at: new Date(),
        updated_at: new Date(),
      },
    ];

    await queryInterface.bulkInsert('drummers', drummersList);
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('drummers', null, {});
  },
};
