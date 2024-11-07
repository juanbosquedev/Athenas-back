import client from "../database/connection-db";
import userSchema from "./models/user";
import orderSchema from "./models/order";
import reviewSchema from "./models/review";
import addressSchema from "./models/address";
import categorySchema from "./models/category";
import productSchema from "./models/product";


const con = client;


export const Product = con.model("Product", productSchema);
export const User = con.model("User", userSchema);
export const Order = con.model("Order", orderSchema);
export const Review = con.model("Review", reviewSchema);
export const Address = con.model("Address", addressSchema);
export const Category = con.model("Category", categorySchema);

