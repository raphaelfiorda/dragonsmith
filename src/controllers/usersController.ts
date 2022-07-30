import { Request, Response } from 'express';
import UserService from '../services/usersService';

export default class UserController {
  public service: UserService;

  constructor(service: UserService = new UserService()) {
    this.service = service;
  }

  create = async (req: Request, res: Response): Promise<Response> => {
    const user = req.body;
    const token = await this.service.create(user);
  
    return res.status(201).json({ token });
  };
}