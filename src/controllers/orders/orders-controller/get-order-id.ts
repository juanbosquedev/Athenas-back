import type { Request, Response } from "express";
import { Order } from "../../../schemas/index";

export async function getUserOrders(req: Request, res: Response): Promise<void> {
    try {
        const { userId } = req.params;

        const orders = await Order.find({ user: userId })
            .populate("shippingAddress")
            .populate("products", "name price")
            .populate("user", "name")

        res.json(orders);
    } catch (error) {
            res.status(500).json({ error: "Error fetching user orders" });
        }
            
}
