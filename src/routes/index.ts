import { Router } from 'express';
import userRouter from "./user-router/index"
import productsRouter from './product-router/index';
import reviewRouter from "./review-router/index"
import categoryRouter from "./category-router/index"
import addressRouter from "./address-router/index"


const router = Router();

router.use('/users', userRouter);
router.use('/products', productsRouter);
router.use('/reviews', reviewRouter);
router.use('/categories', categoryRouter);
router.use('/addresses', addressRouter);


export default router; 
