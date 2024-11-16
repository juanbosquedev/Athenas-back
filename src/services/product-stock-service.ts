import { Product } from "../schemas/index";
import type{ Types } from "mongoose";

async function checkAndUpdateStock(
    products: { productId: string | Types.ObjectId; quantity: number }[],
    revert = false
  ): Promise<void> {
    for (const item of products) {
      const product = await Product.findById(item.productId);
  
      if (!product) throw new Error(`Product with ID ${item.productId} not found`);
  
      const stockChange = revert ? item.quantity : -item.quantity;
  
      if (!revert && product.stock < item.quantity) {
        throw new Error(`Not enough stock for product ${product.name}`);
      }
  
      product.stock += stockChange; 
      await product.save();
    }
  }
export { checkAndUpdateStock };
  