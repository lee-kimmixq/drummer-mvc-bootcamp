module.exports = {
  up: async (queryInterface) => {
    const reservationsList = [
      {
        drummer_id: 1,
        date: '2022-02-08 22:10:07.753+09',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        drummer_id: 1,
        date: '2022-02-09 22:10:07.753+09',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        drummer_id: 2,
        date: '2022-02-10 22:10:07.753+09',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        drummer_id: 2,
        date: '2022-02-11 22:10:07.753+09',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        drummer_id: 3,
        date: '2022-02-12 22:10:07.753+09',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        drummer_id: 3,
        date: '2022-02-13 22:10:07.753+09',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        drummer_id: 4,
        date: '2022-02-14 22:10:07.753+09',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        drummer_id: 1,
        date: '2022-02-15 22:10:07.753+09',
        created_at: new Date(),
        updated_at: new Date(),
      },
    ];

    await queryInterface.bulkInsert('reservations', reservationsList);
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('reservations', null, {});
  },
};
