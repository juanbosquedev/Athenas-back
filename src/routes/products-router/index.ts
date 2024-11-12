import { Router } from "express";
import { allProducts, createProduct, getProductById, deleteProductById, updateProduct } from "../../controllers/products/index";
import { createReview, getReviewsByProduct } from "../../controllers/reviews/index";
const router = Router();

router.get("/", allProducts);
router.get("/:id", getProductById);
router.post("/", createProduct);
router.patch("/:id", updateProduct);
router.delete("/:id", deleteProductById);

router.get("/:productId/reviews", getReviewsByProduct);
router.post("/:productId/reviews", createReview);

export default router;