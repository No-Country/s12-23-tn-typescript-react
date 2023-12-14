import express from 'express';
import { validateJWT } from '../middlewares/authentication';
import { userIdSchema, userLoginSchema, userSchema, userUpdateSchema } from '../validations/user';
import validationMiddleware from '../middlewares/validatorMiddeware';
import { getUsers, userLogin, registerUser, getUser, getUserById, updateUser } from '../controller/user.controllers';
import { jwtPayload } from '../config/jwt';

declare global {
  namespace Express {
    interface Request {
      user: jwtPayload;
    }
  }
}

const usersRouter = express.Router();

// login
// ver mis datos de usuario
// editar mis datos


// registrar un usuario (admin)
// ver usuarios (admin)
// ver operario (admin)
// editar datos de un operario (admin)
// borrar un operario (admin)
usersRouter.post('/session/login', validationMiddleware(userLoginSchema), userLogin)

usersRouter.use(validateJWT);
usersRouter.get('/session', getUser);
// usersRouter.put('/session', validationMiddleware(userUpdateSchema), updateUser);

usersRouter.post('/', validationMiddleware(userSchema), registerUser);
usersRouter.get('/', getUsers);
usersRouter.get('/:id', validationMiddleware(userIdSchema, true), getUserById);

export { usersRouter };
export default usersRouter;
