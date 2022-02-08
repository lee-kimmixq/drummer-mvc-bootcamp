module.exports = {
  up: async (queryInterface) => {
    const equipmentList = [
      {
        name: 'drumset',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'timpani',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'xylophone',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'triangle',
        created_at: new Date(),
        updated_at: new Date(),
      },
    ];

    await queryInterface.bulkInsert('equipments', equipmentList);

    const drummerEquipmentData = [
      {
        drummer_id: 1,
        equipment_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        drummer_id: 1,
        equipment_id: 2,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        drummer_id: 2,
        equipment_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        drummer_id: 2,
        equipment_id: 3,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        drummer_id: 3,
        equipment_id: 4,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        drummer_id: 4,
        equipment_id: 2,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ];

    await queryInterface.bulkInsert('drummers_equipments', drummerEquipmentData);
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('drummers_equipments', null, {});
    await queryInterface.bulkDelete('equipments', null, {});
  },
};
