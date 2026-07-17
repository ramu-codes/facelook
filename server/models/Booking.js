import mongoose from 'mongoose';

const bookingSchema = new mongoose.Schema(
  {
    reference: { type: String, required: true, unique: true },
    world: { type: String, enum: ['men', 'women'], required: true },
    branch: { type: String, required: true },
    service: { type: String, required: true },
    stylist: { type: String, required: true },
    date: { type: String, required: true },
    time: { type: String, required: true },
    name: { type: String, required: true, trim: true },
    phone: { type: String, required: true, trim: true },
    price: { type: Number, default: 0 },
    status: { type: String, enum: ['confirmed', 'cancelled', 'completed'], default: 'confirmed' },
  },
  { timestamps: true }
);

export default mongoose.model('Booking', bookingSchema);
