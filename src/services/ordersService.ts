import connection from '../models/connection';
import OrderModel from '../models/ordersModel';
import Order from '../interfaces/orderInterface';

export default class OrderService {
  public orderModel: OrderModel;

  constructor(model: OrderModel = new OrderModel(connection)) {
    this.orderModel = model;
  }

  list = async (): Promise<Order[] | []> => (
    this.orderModel.list());

  // create = async (user: Order): Promise<string> => {
  //   const { username, classe } = user;
  //   const token = jwtService.createToken({ username, classe });
  //   this.userModel.create(user);

  // //   return token;
  // };
} 