import type {Types} from "mongoose";

export interface UserDocument {
  name: string;
  email: string;
  password: string;
  addresses: Types.ObjectId[];
  orders: Types.ObjectId[];
  favoriteProducts: Types.ObjectId[];
  reviews: Types.ObjectId[];
}
