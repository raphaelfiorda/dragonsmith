import { Pool, ResultSetHeader } from 'mysql2/promise';
import Product from '../interfaces/productInterface';

export default class ProductModel {
  public connection: Pool;

  public constructor(connection: Pool) {
    this.connection = connection;
  }

  public async list(): Promise<Product[] | []> {
    const sql = 'SELECT * FROM Trybesmith.Products';
    const [products] = await this.connection.query(sql);

    return products as Product[];
  }

  public async create(product: Product): Promise<number> {
    const { name, amount } = product;
    const sql = 'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)';
    const [{ insertId }] = await this.connection.query<ResultSetHeader>(sql, [name, amount]);

    return insertId;
  }
}