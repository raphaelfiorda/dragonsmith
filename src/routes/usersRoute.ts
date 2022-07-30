import { Router } from 'express';
import UserController from '../controllers/usersController';

const router = Router();

const userController = new UserController();

// router.get('/products', (req, res) => userController.list(req, res));

router.post('/users', (req, res) => userController.create(req, res));

export default router;
