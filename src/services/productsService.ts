import connection from '../models/connection';
import ProductModel from '../models/productsModel';
import Product from '../interfaces/productInterface';

export default class ProductService {
  public productModel: ProductModel;

  constructor(model: ProductModel = new ProductModel(connection)) {
    this.productModel = model;
  }

  list = async (): Promise<Product[] | []> => (
    this.productModel.list());

  create = async (product: Product): Promise<number> => (
    this.productModel.create(product));
} 