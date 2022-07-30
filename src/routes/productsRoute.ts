import { Router } from 'express';
import ProductController from '../controllers/productsController';

const router = Router();

const productController = new ProductController();

router.post('/products', (req, res) => productController.create(req, res));

export default router;
