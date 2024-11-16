import type { Types } from "mongoose";

export interface ProductDocument {
    name: string;
    description: string;
    price: number;
    category: Types.ObjectId;
    image: string;
    stock: number;
    reviews: Types.ObjectId[];
}
