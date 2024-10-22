import mongoose from 'mongoose';
import { uri } from '../config/config';

if (!uri) {
  throw new Error("MongoDB connection URI is not defined in the environment variables.");
}

const client = mongoose.createConnection(uri, {
  serverApi: {
    version: '1',
    strict: true,
    deprecationErrors: true,
  },});

export default client;
