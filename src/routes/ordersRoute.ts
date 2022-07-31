import { Router } from 'express';
import OrderController from '../controllers/ordersControllers';

const router = Router();

const orderController = new OrderController();

router.get('/orders', (req, res) => orderController.list(req, res));

// router.post('/products', (req, res) => productController.create(req, res));

export default router;
