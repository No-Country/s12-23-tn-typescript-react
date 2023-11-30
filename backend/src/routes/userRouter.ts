import express from 'express';
import { HttpCodes } from '../utils';
import { getSequelize } from '../config/db';
import User from '../models/user.model';
import { validateJWT } from '../middlewares/authentication';
import { RequestExtends } from '../interfaces/reqExtends.interface';

const userRouter = express.Router();

userRouter.route('/').get(async (req, res) => {
  try {
    const users = await User.findAll();

    res.status(HttpCodes.CODE_SUCCESS).json({
      message: 'Users Page',
      response: users,
    });

    // const sequelize = getSequelize();
    // const result = await sequelize.query('SELECT 1 as columna');
    // res.status(HttpCodes.CODE_SUCCESS).json({
    //   message: 'Users Page',
    //   response: result,
    // });
  } catch (error) {
    console.log(error);
    res.status(HttpCodes.CODE_INTERNAL_SERVER_ERROR).json({
      message: 'Users Page Error',
    });
  }
});

userRouter.route('/:id').get(validateJWT, async (req: RequestExtends, res) => {
  // Aca se puede observar el user
  console.log(req.user);
  try {
    // const users = await User.findOne();
    const sequelize = getSequelize();
    const result = await sequelize.query('SELECT 1 as columna');
    res.status(HttpCodes.CODE_SUCCESS).json({
      message: 'Users Page',
      response: result,
    });
  } catch (error) {
    console.log(error);
    res.status(HttpCodes.CODE_INTERNAL_SERVER_ERROR).json({
      message: 'Users Page Error',
    });
  }
});

export default userRouter;
