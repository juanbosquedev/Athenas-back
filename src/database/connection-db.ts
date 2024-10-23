const { MongoClient, ServerApiVersion } = require('mongodb');
import { uri } from "../config/config";

if (!uri) {
  throw new Error("MongoDB connection URI is not defined in the environment variables.");
}

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },});

export default client;
