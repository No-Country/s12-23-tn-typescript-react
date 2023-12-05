import { CreateSuppliertDto } from '../dto/createSupplier.dto';
import { UpdateSuppliertDto } from '../dto/updateSupplier.dto';
import Proveedor, { IProvedor } from '../models/proveedor.model';

const findAllSuppliers = async (): Promise<IProvedor[]> => {
  const suppliers = await Proveedor.findAll();
  return suppliers;
};

const insertSupplier = async (bodySupplier: CreateSuppliertDto): Promise<IProvedor> => {
  const { nombre, direccion, telefono } = bodySupplier;
  const supplier = await Proveedor.create({
    nombre,
    direccion,
    telefono,
  });

  return supplier;
};

const getByIdSupplier = async (proveedor_id: number): Promise<IProvedor | string> => {
  console.log('Tipo:', typeof proveedor_id);
  console.log(proveedor_id);
  const supplier = await Proveedor.findOne({ where: { proveedor_id: proveedor_id } });
  if (!supplier) {
    return 'No se encuentra Id';
  }
  return supplier;
};

const updateByIdSupplier = async (id: number, bodySupplier: UpdateSuppliertDto): Promise<IProvedor | string> => {
  const { nombre, direccion, telefono } = bodySupplier;
  const findSupplier = await Proveedor.findOne({ where: { id: id } });
  if (!findSupplier) {
    return 'No se encuentra Id';
  }
  const supplier = await Proveedor.update(
    {
      nombre,
      direccion,
      telefono,
    },
    { where: { id: id } },
  );

  if (!supplier) {
    return 'No se pudo actualizar';
  }

  const updateSupplier = await Proveedor.findOne({ where: { id: id } });

  if (!updateSupplier) {
    return 'No se pudo actualizar';
  }

  return updateSupplier;
};

const deleteByIdSupplier = async (id: number): Promise<string> => {
  const findSupplier = await Proveedor.findOne({ where: { id: id } });
  if (!findSupplier) {
    return 'No se encuentra Id';
  }
  const removeSupplier = await Proveedor.destroy({ where: { id: id } });
  if (!removeSupplier) {
    return 'No se pudo eliminar';
  }
  return 'Eliminado';
};

export { findAllSuppliers, insertSupplier, getByIdSupplier, updateByIdSupplier, deleteByIdSupplier };
