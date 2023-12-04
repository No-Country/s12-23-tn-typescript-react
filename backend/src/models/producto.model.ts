import { DataTypes } from 'sequelize';
import { getSequelize } from '../config/db';
import Proveedor from './proveedor.model';
import Categoria from './categoria.model';

const Producto = getSequelize().define(
  'Producto',
  {
    producto_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    nombre: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    precio: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    proveedor_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Proveedor',
        key: 'proveedor_id',
      },
    },
    categoria_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Categoria',
        key: 'categoria_id',
      },
    },
  },
  {
    tableName: 'Producto',
    timestamps: false,
  },
);

Producto.belongsTo(Proveedor, {
  foreignKey: 'proveedor_id',
});

Producto.belongsTo(Categoria, {
  foreignKey: 'categoria_id',
});

Producto.sync({ alter: true });

export default Producto;
