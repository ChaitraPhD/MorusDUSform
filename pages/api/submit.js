import mongoose from 'mongoose';

const uri = process.env.MONGODB_URI;

if (!mongoose.connections[0].readyState) {
  mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
}

const traitSchema = new mongoose.Schema({
  variety: String,
  growthHabit: String,
  shootType: String,
  leafApex: String,
  interNodalDistance: String,
});

const Trait = mongoose.models.Trait || mongoose.model('Trait', traitSchema);

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const trait = new Trait(req.body);
      await trait.save();
      res.status(200).json({ message: 'Saved to MongoDB!' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
