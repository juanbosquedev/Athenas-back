import { Order } from "../schemas/index";
import { checkAndUpdateStock } from "./product-stock-service";
import type { UpdateOrderPayload } from "../interfaces/controllers/update-order";

async function updateOrder(orderId: string, updates: UpdateOrderPayload) {
    const order = await Order.findById(orderId);

    if (!order) {
        throw new Error("Order not found");
    }

    if (updates.products) {
        const currentProducts = order.products.map((prod) => ({
            productId: prod.productId.toString(),
            quantity: prod.quantity,
        }));

        await checkAndUpdateStock(currentProducts, true); 
        await checkAndUpdateStock(updates.products); 

        order.products = updates.products.map((prod) => ({
            productId: prod.productId,
            quantity: prod.quantity,
        }));
    }

    if (updates.status) {
        order.status = updates.status;
    }

    if (updates.shippingAddress) {
        order.shippingAddress = updates.shippingAddress;
    }

    return await order.save();
}

export { updateOrder };
