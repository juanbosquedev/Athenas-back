import type { Types } from "mongoose";

export interface ReviewDocument {
    user: Types.ObjectId;
    product: Types.ObjectId;
    rating: number;
    comment?: string;
}
