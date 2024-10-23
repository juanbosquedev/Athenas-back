import mongoose from 'mongoose';


const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    addresses: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Address' }],
    orders: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Order' }],
    favoriteProducts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }],
    reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Review' }]
});

export default userSchema;
