import { DataTypes } from 'sequelize';
import { getSequelize } from '../config/db';

const Categoria = getSequelize().define(
  'Categoria',
  {
    categoria_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    nombre: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
  },
  {
    tableName: 'Categoria',
    timestamps: false,
  },
);

Categoria.sync({ alter: true });

export default Categoria;
