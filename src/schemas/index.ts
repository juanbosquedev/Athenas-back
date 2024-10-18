import client from '../database/connection-db'; 

import productSchema from './schemas-folder/product';
import userSchema from './schemas-folder/user';
import orderSchema from './schemas-folder/order';
import reviewSchema from './schemas-folder/review';
import addressSchema from './schemas-folder/address'; 

const con = client;

export const Product = con.model('Product', productSchema);
export const User = con.model('User', userSchema);
export const Order = con.model('Order', orderSchema);
export const Review = con.model('Review', reviewSchema);
export const Address = con.model('Address', addressSchema);
