import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
	name: { type: String, required: true },
	description: { type: String, required: true },
	price: { type: Number, required: true },
	category: { type: mongoose.Schema.Types.ObjectId, ref: "Category" },
	image: { type: String, required: true },
	stock: { type: Number, required: true },
	reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: "Review" }],
});

export default productSchema;
