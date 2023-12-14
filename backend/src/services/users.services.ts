import { hashPassword } from '../config/bcrypt';
import { CreateUserDto } from '../dto/createUser.dto';
import { updateUserDto } from '../dto/updateUser.dto';
import { ADMIN, OPERARIO } from '../interfaces/rol.interface';
import { Rol, User, IUser } from '../models/user.model';

const getAllUsers = async (): Promise<IUser[]> => {
  const roles = await Rol.findAll();
  console.log(roles.map(rol => rol.dataValues));
  const users = await User.findAll();
  return users;
};

const insertUser = async (bodyUser: CreateUserDto): Promise<IUser> => {
  const { nombre, contrasena, email, rol_id } = bodyUser;
  const hashContrasena = await hashPassword(contrasena);

  const user = await User.create({
    nombre,
    contrasena: hashContrasena,
    email,
    rol_id
  });

  return user;
};

const getUserById = async (id: number): Promise<IUser | string> => {
  const user = await User.findOne({ where: { id: id } });
  if (!user) {
    return 'User id not found.';
  }
  return user;
};

const getUserByEmail = async (email: string): Promise<IUser | string> => {
  const user = await User.findOne({ where: { email: email } });
  if (!user) {
    return 'User email not found.';
  }
  return user;
};

const updateUserById = async (id: number, bodyUser: updateUserDto): Promise<IUser | string> => {
  const { nombre, contrasena, confirmContrasena, email, rol_id } = bodyUser;

  let user = await User.findOne({ where: { id: id } });
  if (!user) {
    return 'User id not found.';
  }

  if (user.rol_id !== OPERARIO && rol_id === ADMIN) {
    return 'Can not change role'
  }

  console.log(contrasena);
  console.log(confirmContrasena);
  let newHashContrasena: string | undefined;
  if (contrasena !== undefined) {
    if (confirmContrasena !== undefined) {
      if (contrasena === confirmContrasena) {
        newHashContrasena = await hashPassword(contrasena);
      } else {
        return 'Escriba la misma contraseña ambas veces';
      }
    }
  }

  user = await user.update(
    {
      nombre,
      newHashContrasena,
      email,
    },
    { where: { id: id } },
  );

  if (!user) {
    return 'Could not update user';
  }

  const updatedUser = await User.findOne({ where: { id: id } });

  if (!updatedUser) {
    return 'Could not update user';
  }

  return updatedUser;
};

export { getAllUsers, getUserById, getUserByEmail, insertUser, updateUserById };
export default { getAllUsers, getUserById, getUserByEmail, insertUser, updateUserById };


