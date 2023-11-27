import express from 'express';
import { HttpCodes } from '../utils';

const userRouter = express.Router();

userRouter.route('/').get((req, res) => {
  res.status(HttpCodes.CODE_SUCCESS).json({
    message: 'Users Page',
  });
});

export default userRouter;
