import express from 'express';
import { HttpCodes } from '../utils';

import validationMiddleware from '../middlewares/validatorMiddeware';
import productSchema from '../validations/products';

const productRouter = express.Router();

productRouter.route('/').post(validationMiddleware(productSchema), async (req, res) => {
  try {
    console.log('Todo validado correctamente');
    res.status(HttpCodes.CODE_SUCCESS).json({
      message: 'Todo validado correctamente',
    });
  } catch (error) {
    console.log(error);
    res.status(HttpCodes.CODE_INTERNAL_SERVER_ERROR).json({
      message: 'Products Page Error',
    });
  }
});

export default productRouter;
