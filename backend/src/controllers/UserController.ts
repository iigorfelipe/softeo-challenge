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

  findAll = async (
    _req: Request,
    res: Response,
  ): Promise<Response> => {
    const users = await this.service.findAll();

    return res.status(200).json(users);
  };

  findOne = async (
    req: Request,
    res: Response,
  ): Promise<Response> => {
    const { id } = req.params;

    const user = await this.service.findOne(id);

    return res.status(200).json(user);
  };

  delete = async (
    req: Request,
  ): Promise<void> => {
    const { id } = req.params;

    await this.service.delete(id);
  };
}

export default new UserController();
