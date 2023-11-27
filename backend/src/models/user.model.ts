import { DataTypes } from 'sequelize';
import { getSequelize } from '../config/db';

const User = getSequelize().define(
  'User',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true,
      },
    },
    telefono: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    // Otras opciones del modelo
  },
);

User.sync({ alter: true });

export default User;
