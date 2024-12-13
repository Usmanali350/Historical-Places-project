const { MongoClient } = require('mongodb');
const uri = 'mongodb://127.0.0.1:27017';
const databaseName = 'Web-Project';
let db;
async function connectToDatabase() {
  try {
    const client = new MongoClient(uri);
    await client.connect();
    console.log('Connected to MongoDB');
    db = client.db(databaseName);
  } catch (error) {
    console.error('Failed to connect to MongoDB', error);
    process.exit(1);
  }
}
function getDatabase() {
  if (!db) {
    throw new Error('Database not connected!');
  }
  return db;
}

module.exports = { connectToDatabase, getDatabase };
