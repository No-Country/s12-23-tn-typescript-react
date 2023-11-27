import express, { Request, Response } from 'express';
import userRouter from './userRouter';

const rootRouter = express();
const server = express.Router();

server.get('/', (req: Request, res: Response) => {
  res.status(200).json({
    message: 'Root page',
  });
});

rootRouter.use('/', server);
rootRouter.use('/users', userRouter);

export default rootRouter;
