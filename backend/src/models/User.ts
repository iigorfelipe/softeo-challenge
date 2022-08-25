import { DataTypes, Model } from 'sequelize/types';
import db from '../database/db';

class UserModel extends Model {
  id: number;

  names: string;

  values: string;

  parcels: number;

  payday: number;
}

UserModel.init({
  id: {
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  names: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  values: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  parcels: {
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  payday: {
    allowNull: false,
    type: DataTypes.INTEGER,
  },
}, {
  modelName: 'user',
  sequelize: db,
  timestamps: false,
});

export default UserModel;
