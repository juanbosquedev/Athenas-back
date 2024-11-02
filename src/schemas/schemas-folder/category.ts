import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
	name: { type: String, required: true },
    parentId: { type: mongoose.Schema.Types.ObjectId, ref: "Category", default: null }, 
    gender: { type: String, enum: ["Hombre", "Mujer", "Unisex"], default: null }, 
    description: { type: String, default: "" },	
});

export default categorySchema;
