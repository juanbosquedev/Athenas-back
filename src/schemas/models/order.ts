import { Schema } from "mongoose";
import type { OrderDocument } from "../../interfaces/models/order-interfaces";
import { OrderStatus } from "../../interfaces/models/order-interfaces";

const orderSchema = new Schema<OrderDocument>({
  user: { type: Schema.Types.ObjectId, ref: "User", required: true },
  products: [
    {
      productId: { type: Schema.Types.ObjectId, ref: "Product", required: true },
      quantity: { type: Number, required: true },
    },
  ],
  totalPrice: { type: Number, required: true },
  status: {
    type: String,
    enum: Object.values(OrderStatus),
    default: OrderStatus.Pending,
  },
  shippingAddress: { type: Schema.Types.ObjectId, ref: "Address" },
  orderDate: { type: Date, default: Date.now },
});

export default orderSchema;
