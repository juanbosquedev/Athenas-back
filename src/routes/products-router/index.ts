import { Router } from "express";
import { allProducts, createProduct, getProductById, deleteProductById, updateProduct } from "../../controllers/products/index";

const route = Router();

route.get("/", allProducts);
route.get("/:id", getProductById);
route.post("/", createProduct);
route.patch("/:id", updateProduct);
route.delete("/:id", deleteProductById);

export default route;