import mongoose from 'mongoose';

const uri = process.env.MONGODB_URI;

// Connect to MongoDB if not already connected
if (!mongoose.connections[0].readyState) {
  mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
}

// Flexible schema to accept any form data
const traitSchema = new mongoose.Schema({}, { strict: false });

const Trait = mongoose.models.Trait || mongoose.model('Trait', traitSchema);

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const trait = new Trait(req.body); // Save the full form data
      await trait.save();
      res.status(200).json({ message: 'Saved to MongoDB!' });
    } catch (error) {
      console.error('Save Error:', error);
      res.status(500).json({ error: error.message });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
