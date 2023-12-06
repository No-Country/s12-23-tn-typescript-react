import { Router } from 'express';
import { getSuppliers, getSuuplierById, postSupplier } from '../controller/supplier.controllers';

const supplierRouter = Router();

supplierRouter.get('/', getSuppliers);
supplierRouter.post('/', postSupplier);
supplierRouter.get('/:id', getSuuplierById);
supplierRouter.put('/:id', postSupplier);

export { supplierRouter };
