import { Request, Response } from 'express';
import OrderService from '../services/ordersService';

export default class OrderController {
  public service: OrderService;

  constructor(service: OrderService = new OrderService()) {
    this.service = service;
  }

  list = async (_req: Request, res: Response): Promise<Response> => {
    const orders = await this.service.list();

    return res.status(200).json(orders);
  };

  // create = async (req: Request, res: Response): Promise<Response> => {
  //   const product = req.body;
  //   const id = await this.service.create(product);
  
  //   return res.status(201).json({ id, ...product });
  // };
}