import { DataTypes } from 'sequelize';
import { getSequelize } from '../config/db';

const Proveedor = getSequelize().define(
  'Proveedor',
  {
    proveedor_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    nombre: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    direccion: {
      type: DataTypes.STRING(255),
    },
    telefono: {
      type: DataTypes.STRING(20),
    },
  },
  {
    tableName: 'Proveedor',
    timestamps: false,
  },
);

Proveedor.sync({ alter: true });

export default Proveedor;
