import { Router } from 'express';
import productsRouter from './products-router/index';
import reviewRouter from "./review-router/index"

const router = Router();

router.use('/products', productsRouter);
router.use('/reviews', reviewRouter);


export default router; 
