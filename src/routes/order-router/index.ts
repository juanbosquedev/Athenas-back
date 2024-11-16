import { Router } from "express";
import { getAllOrders, getUserOrders, createOrderController, updateOrderController, deleteOrder } from "../../controllers/orders/index";

const router = Router();

router.get("/", getAllOrders);
router.get("/:userId", getUserOrders);
router.post("/", createOrderController);
router.put("/:orderId", updateOrderController);
router.delete("/:orderId", deleteOrder);

export default router;
