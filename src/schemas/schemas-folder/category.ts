import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
	name: { type: String, required: true },
	color: { type: String, required: true },
});

export default categorySchema;