import UserModel from '../models/User';
import { UserType } from '../types/UserType';

class UserService {
  create = async (obj: UserType): Promise<UserModel> => {
    const newUser = await UserModel.create(obj);

    return newUser;
  };

  findAll = async (): Promise<UserModel[]> => {
    const users = await UserModel.findAll();

    return users;
  };

  findOne = async (id: string): Promise<UserModel | null> => {
    const user = await UserModel.findOne({ where: { id } });

    return user;
  };
}

export default UserService;
