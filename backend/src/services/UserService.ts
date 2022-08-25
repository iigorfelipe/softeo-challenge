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
}

export default UserService;
