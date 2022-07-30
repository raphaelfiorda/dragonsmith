import { Pool } from 'mysql2/promise';
import User from '../interfaces/userInterface';

export default class UserModel {
  public connection: Pool;

  public constructor(connection: Pool) {
    this.connection = connection;
  }

  // public async list(): Promise<Product[] | []> {
  //   const sql = 'SELECT * FROM Trybesmith.Products';
  //   const [products] = await this.connection.query(sql);

  //   return products as Product[];
  // }

  public async create(user: User): Promise<void> {
    const { username, classe, level, password } = user;
    const sql = `INSERT INTO
      Trybesmith.Users (username, classe, level, password) VALUES (?, ?, ?, ?)`;
    await this.connection.query(sql, [username, classe, level, password]);
  }
}