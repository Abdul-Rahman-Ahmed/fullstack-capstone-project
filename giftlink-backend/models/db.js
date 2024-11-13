// db.js
require("dotenv").config();
const MongoClient = require("mongodb").MongoClient;

// MongoDB connection URL with authentication options
let url = `${process.env.MONGO_URL}`;

let dbInstance = null;
const dbName = "giftdb";

async function connectToDatabase() {
  if (dbInstance) {
    return dbInstance;
  }

  const client = new MongoClient(url);
console.log(1)
await client.connect();
console.log(2)
  dbInstance = client.db(dbName);
  return dbInstance;
}

module.exports = connectToDatabase;
