import { Pool } from 'mysql2/promise';
import Order from '../interfaces/orderInterface';

export default class OrderModel {
  public connection: Pool;

  public constructor(connection: Pool) {
    this.connection = connection;
  }

  public async list(): Promise<Order[] | []> {
    const sqlOrders = 'SELECT * FROM Trybesmith.Orders';
    const sqlProducts = `SELECT OD.id, PR.id AS productId FROM Trybesmith.Orders AS OD
      INNER JOIN Trybesmith.Products AS PR
      ON OD.id = PR.orderId;`;
    const [ordersRows] = await this.connection.query(sqlOrders);
    const [productsRows] = await this.connection.query(sqlProducts);

    const orders = Object.values(ordersRows);

    Object.values(productsRows)
      .forEach((pr) => {
        const index = orders.findIndex((or) => or.id === pr.id);
        if (orders[index].productsIds === undefined) {
          orders[index].productsIds = [pr.productId];
        } else {
          orders[index].productsIds.push(pr.productId);
        }
      });
    // console.log(teste);
    return orders as Order[];
  }

  // public async create(user: User): Promise<void> {
  //   const { username, classe, level, password } = user;
  //   const sql = `INSERT INTO
  //     Trybesmith.Users (username, classe, level, password) VALUES (?, ?, ?, ?)`;
  //   await this.connection.query(sql, [username, classe, level, password]);
  // }
}