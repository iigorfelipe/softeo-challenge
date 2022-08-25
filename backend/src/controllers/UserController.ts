import { Request, Response } from 'express';
import UserService from '../services/UserService';

class UserController {
  private service = new UserService();

  create = async (
    req: Request,
    res: Response,
  ): Promise<Response> => {
    const {
      name, value, parcel, payday,
    } = req.body;

    const newUser = await this.service.create({
      name, value, parcel, payday,
    });

    return res.status(200).json(newUser);
  };
}

export default new UserController();
