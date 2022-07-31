interface Order {
  id: number;
  userId: number;
  productsIds: number[] | null;
}

export default Order;