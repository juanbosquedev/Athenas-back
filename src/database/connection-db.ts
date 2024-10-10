const { MongoClient, ServerApiVersion } = require('mongodb');
import { uri } from "../config/config";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

export default client;