import mongoose from 'mongoose';

const craftSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  bgImage: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const Craft = mongoose.models.Craft || mongoose.model('Craft', craftSchema);

export default Craft;
