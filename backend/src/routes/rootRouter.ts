import express, { Request, Response } from 'express';
import userRouter from './userRouter';
import productRouter from './productRoute';
import { supplierRouter } from './supplier.routes';
import { clientRouter } from './client.routes';
import { movementRouter } from './movement.routes';
import categoryRouter from './category.routes';

const rootRouter = express();
const server = express.Router();

server.get('/', (req: Request, res: Response) => {
  res.status(200).json({
    message: 'Root page',
  });
});

rootRouter.use('/', server);
rootRouter.use('/users', userRouter);
rootRouter.use('/products', productRouter);
rootRouter.use('/category', categoryRouter);
rootRouter.use('/supplier', supplierRouter);
rootRouter.use('/clients', clientRouter)
rootRouter.use('/movements', movementRouter)

export default rootRouter;
