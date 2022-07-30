import connection from '../models/connection';
import UserModel from '../models/usersModel';
import User from '../interfaces/userInterface';
import jwtService from './jwtService';

export default class UserService {
  public userModel: UserModel;

  constructor(model: UserModel = new UserModel(connection)) {
    this.userModel = model;
  }

  // list = async (): Promise<?> => (
  //   this.userModel.list());

  create = async (user: User): Promise<string> => {
    const { username, classe } = user;
    const token = jwtService.createToken({ username, classe });
    this.userModel.create(user);

    return token;
  };
} 