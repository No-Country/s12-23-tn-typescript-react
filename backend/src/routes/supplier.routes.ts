import { Router } from 'express';
import { getSuppliers, getSuuplierById, postSupplier } from '../controller/supplier.controllers';

const supplierRouter = Router();

supplierRouter.get('/', getSuppliers);
supplierRouter.post('/', postSupplier);
supplierRouter.get('/:proveedor_id', getSuuplierById);
supplierRouter.put('/:proveedor_id', postSupplier);

export { supplierRouter };
