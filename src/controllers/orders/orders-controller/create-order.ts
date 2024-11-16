import type { Request, Response } from "express";
import { createOrder } from "../../../services/order-service";

async function createOrderController(req: Request, res: Response): Promise<void> {
    try {
        const { userId, products, totalPrice, addressId } = req.body;

        const order = await createOrder(userId, products, totalPrice, addressId);

        res.status(201).json(order);
    } catch (error) {
        res.status(500).json({ error: error instanceof Error ? error.message : "Unexpected error" });
    }
}

export { createOrderController }