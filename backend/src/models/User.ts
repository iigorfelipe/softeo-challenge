import { DataTypes, Model } from 'sequelize';
import db from '../database/db';

class UserModel extends Model {
  id: number;

  name: string;

  value: string;

  parcel: number;

  payday: number;
}

UserModel.init({
  id: {
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  value: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  parcel: {
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
