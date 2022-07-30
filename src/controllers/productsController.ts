import { Request, Response } from 'express';
import ProductService from '../services/productsService';

export default class ProductController {
  public service: ProductService;

  constructor(service: ProductService = new ProductService()) {
    this.service = service;
  }

  list = async (_req: Request, res: Response): Promise<Response> => {
    const products = await this.service.list();

    return res.status(200).json(products);
  };

  create = async (req: Request, res: Response): Promise<Response> => {
    const product = req.body;
    const id = await this.service.create(product);
  
    return res.status(201).json({ id, ...product });
  };
}