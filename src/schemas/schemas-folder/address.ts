import mongoose from 'mongoose';

const addressSchema = new mongoose.Schema({
    street: { type: String, required: true },
    country: { type: String, required: true },
    city: { type: String, required: true },
    zipCode: { type: String, required: true },
    additionalInfo: { type: String },
    default:{type: Boolean},
});

export default addressSchema;
