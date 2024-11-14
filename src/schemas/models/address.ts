import { Schema } from "mongoose";
import type { AddressDocument } from "../interfaces/address-interfaces";

const addressSchema = new Schema<AddressDocument>({
	street: { type: String, required: true },
	country: { type: String, required: true },
	city: { type: String, required: true },
	zipCode: { type: String, required: true },
	additionalInfo: { type: String },
	default: { type: Boolean, default: false },
});

export default addressSchema;
