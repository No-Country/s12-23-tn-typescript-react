import { DataTypes, Model } from "sequelize";
import { getSequelize } from "../config/db";
import { MovementsInterface } from "../interfaces/movements.interface";

export interface IMovements extends Model, Omit<MovementsInterface, "id"> {
  addClient(ClientId: any): unknown;
}


const Movement = getSequelize().define<IMovements>('Movement',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    movementDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    movementType: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    retirementDate: {
      type: DataTypes.DATE,
      allowNull: true,
    }
  },
  {
    tableName: 'Movement',
    timestamps: false,
  }
)

export { Movement }