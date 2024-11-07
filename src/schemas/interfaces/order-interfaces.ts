import type { Types } from "mongoose";
export enum OrderStatus {
    Pending = "Pending",
    Approved = "Approved",
    Fulfilled = "Fulfilled",
    Delivered = "Delivered",
    Invoiced = "Invoiced",
    Paid = "Paid",
    Cancelled = "Cancelled",
    Returned = "Returned",
    Closed = "Closed"
  }
export interface OrderDocument {
    user: Types.ObjectId;
    products: Types.ObjectId;
    quantity: number;
    totalPrice: number;
    status: OrderStatus;
    shippingAddress: Types.ObjectId;
    orderDate: Date;
}
