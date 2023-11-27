import express from 'express';
import { HttpCodes } from '../utils';
import { query } from '../db/index';

const userRouter = express.Router();

userRouter.route('/').get(async (req, res) => {
  try {
    // const result = await query('SELECT 1 as columna'); // error
    const result = await query('SELECT 1 as columna');
    res.status(HttpCodes.CODE_SUCCESS).json({
      message: 'Users Page',
      response: result.rows,
    });
  } catch (error) {
    console.log(error);
    res.status(HttpCodes.CODE_INTERNAL_SERVER_ERROR).json({
      message: 'Users Page Error',
    });
  }
});

export default userRouter;
