// pages/api/submit.js

import mongoose from 'mongoose';

const uri = process.env.MONGODB_URI;

// Ensure only one connection is created across hot reloads in dev
let cached = global.mongoose;
if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function connectMongo() {
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    cached.promise = mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      dbName: 'morusdb', // Ensure correct DB name
    }).then((mongoose) => mongoose);
  }
  cached.conn = await cached.promise;
  return cached.conn;
}

// Define schema
const traitSchema = new mongoose.Schema({}, { strict: false });
const Trait = mongoose.models.Trait || mongoose.model('Trait', traitSchema);

// API Handler
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    await connectMongo();
    const trait = new Trait(req.body);
    await trait.save();
    res.status(200).json({ message: 'Saved to MongoDB!' });
  } catch (error) {
    console.error('Save Error:', error);
    res.status(500).json({ error: error.message });
  }
}
