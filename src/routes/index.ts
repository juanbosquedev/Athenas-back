import { Router } from 'express';
import productsRouter from './products-router/index';

const router = Router();

router.use('/products', productsRouter);

export default router; 
