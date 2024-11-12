import { Router } from 'express';
import productsRouter from './products-router/index';
import reviewRouter from "./review-router/index"
import categoryRouter from "./category-router/index"


const router = Router();

router.use('/products', productsRouter);
router.use('/reviews', reviewRouter);
router.use('/categories', categoryRouter);



export default router; 
