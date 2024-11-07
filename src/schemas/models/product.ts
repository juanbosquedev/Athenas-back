import mongoose, { Schema } from "mongoose";
import type { ProductDocument } from "../interfaces/product-interfaces";

const productSchema = new Schema<ProductDocument>({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: mongoose.Schema.Types.ObjectId, ref: "Category", required: true },
  image: { type: String, required: true },
  stock: { type: Number, required: true },
  reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: "Review" }],
});

export default productSchema;
