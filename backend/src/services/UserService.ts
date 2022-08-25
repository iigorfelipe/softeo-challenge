import UserModel from '../models/User';
import { UserType } from '../types/UserType';

class UserService {
  create = async (obj: UserType): Promise<UserModel> => {
    const newUser = await UserModel.create(obj);

    return newUser;
  };
}

export default UserService;
