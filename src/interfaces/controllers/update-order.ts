import type { Types } from "mongoose";
import type { OrderStatus } from "../models/order-interfaces";

interface UpdateOrderPayload {
    status?: OrderStatus;
    products?: { productId: Types.ObjectId; quantity: number }[];
    shippingAddress?: Types.ObjectId;
}

export type { UpdateOrderPayload }