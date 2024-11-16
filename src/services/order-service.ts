import { Order } from "../schemas/index";
import { checkAndUpdateStock } from "./product-stock-service";

async function createOrder(
  userId: string,
  products: { productId: string; quantity: number }[],
  totalPrice: number,
  addressId: string
) {
  await checkAndUpdateStock(products);

  const order = new Order({
    user: userId,
    products,
    totalPrice,
    shippingAddress: addressId,
    status: "Pending", 
  });

  return await order.save();
}

export { createOrder };
