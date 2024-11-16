import type { Request, Response } from "express";
import { Order } from "../../../schemas/index";

export async function getAllOrders(req: Request, res: Response): Promise<void> {
    try {
        const orders = await Order.find()
            .populate("shippingAddress")
            .populate("products", "name price")
            .populate("user", "name")

        res.json(orders)
        return;
    } catch (error) {
        res.status(500).json({ error: "Error fetching user orders" });
    }

}
