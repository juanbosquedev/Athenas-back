import type { Request, Response } from "express";
import { Order } from "../../../schemas/index"; // Adjust the import path as needed

async function deleteOrder(req: Request, res: Response): Promise<void> {
    try {
        const { orderId } = req.params;

        // Find and delete the order by ID
        const deletedOrder = await Order.findByIdAndDelete(orderId);

        // If the order doesn't exist, return a 404 response
        if (!deletedOrder) {
            res.status(404).json({ error: "Order not found" });
            return;
        }

        // Successfully deleted, respond with a success message
        res.status(200).json({ message: "Order successfully deleted" });
    } catch (error) {
        // Handle any unexpected errors
        res.status(500).json({ error: "Error deleting order" });
    }
}

export { deleteOrder }

