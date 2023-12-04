import express from 'express';
import validationMiddleware from '../middlewares/validatorMiddeware';
import productSchema from '../validations/products';
import productController from '../controller/productController';

const productRouter = express.Router();

// Ruta para crear un nuevo producto
productRouter.route('/').post(validationMiddleware(productSchema), productController.createProduct);

// Ruta para obtener todos los productos
productRouter.route('/').get(productController.getAllProducts);

// Ruta para obtener un producto por su ID
productRouter.route('/:productId').get(productController.getProductById);

// Ruta para actualizar un producto por su ID
productRouter.route('/:productId').put(validationMiddleware(productSchema), productController.updateProduct);

// Ruta para eliminar un producto por su ID
productRouter.route('/:productId').delete(productController.deleteProduct);

export default productRouter;
