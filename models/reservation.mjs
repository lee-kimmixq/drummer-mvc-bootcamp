import moment from 'moment';

export default function initReservationModel(sequelize, DataTypes) {
  return sequelize.define(
    'reservation',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      drummer_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'drummers',
          key: 'id',
        },
      },
      date: {
        type: DataTypes.DATE,
        get() {
          return moment(this.getDataValue('date')).format('dddd DD/MM/YYYY');
        },
      },
      created_at: {
        allowNull: false,
        type: DataTypes.DATE,
        get() {
          return moment(this.getDataValue('createdAt')).format('DD/MM/YYYY h:mm:ss');
        },
      },
      updated_at: {
        allowNull: false,
        type: DataTypes.DATE,
        get() {
          return moment(this.getDataValue('updatedAt')).format('DD/MM/YYYY h:mm:ss');
        },
      },
    },
    {
      // The underscored option makes Sequelize reference snake_case names in the DB.
      underscored: true,
    },
  );
}
