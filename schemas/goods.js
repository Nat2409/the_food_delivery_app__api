import mongoose, { Schema, ObjectId } from 'mongoose';

const goodSchema = new Schema({
  name: { type: String, required: true },
  amount: { type: Number, required: true },
  price: { type: Number, required: true },
  shopId: { type: ObjectId, required: true },
  image: { type: String, required: true },
});

const GoodModel = mongoose.model('Good', goodSchema);

export default GoodModel;
