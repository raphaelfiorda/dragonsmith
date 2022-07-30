import { Router } from 'express';
import ProductController from '../controllers/productsController';

const router = Router();

const productController = new ProductController();

router.get('/products', (req, res) => productController.list(req, res));

router.post('/products', (req, res) => productController.create(req, res));

export default router;
