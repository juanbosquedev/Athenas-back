import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    products: [
        {
            product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
            quantity: { type: Number, required: true }
        }
    ],
    totalPrice: { type: Number, required: true },
    status: { type: String, default: 'pending' }, // pending, shipped, delivered
    shippingAddress: { type: mongoose.Schema.Types.ObjectId, ref: 'Address' },
    orderDate: { type: Date, default: Date.now }
});

export default orderSchema;
