import { Request, Response } from 'express';
// import connection from '../models/connection';
// import ProductModel from '../models/productsModel';
import ProductService from '../services/productsService';

export default class ProductController {
  public service: ProductService;

  constructor(service: ProductService = new ProductService()) {
    this.service = service;
  }

  create = async (req: Request, res: Response): Promise<Response> => {
    const product = req.body;
    const id = await this.service.create(product);
  
    return res.status(201).json({ id, ...product });
  };
}