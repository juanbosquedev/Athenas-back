import mongoose, { Schema } from "mongoose";
import type { ReviewDocument } from "../../interfaces/models/review-interfaces";

const reviewSchema = new Schema<ReviewDocument>({
	user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
	product: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Product",
		required: true,
	},
	rating: { type: Number, min: 1, max: 5, required: true },
	comment: { type: String },
});

export default reviewSchema;
