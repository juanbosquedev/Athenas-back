import type { Request, Response } from "express";
import { updateOrder } from "../../../services/update-order-service";

export async function updateOrderController(req: Request, res: Response): Promise<void> {
  try {
    const { orderId } = req.params;
    const updates = req.body;

    const updatedOrder = await updateOrder(orderId, updates);

    res.status(200).json(updatedOrder);
  } catch (error) {
    res.status(400).json({ error: error instanceof Error ? error.message : "Unexpected error" });
  }
}
