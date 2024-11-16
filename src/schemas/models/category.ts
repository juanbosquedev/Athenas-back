import { Schema } from "mongoose";
import type { CategoryDocument } from "../../interfaces/models/category-interfaces";

const categorySchema = new Schema<CategoryDocument>({
	name: { type: String, required: true },
	color: { type: String, required: true },
});

export default categorySchema;
