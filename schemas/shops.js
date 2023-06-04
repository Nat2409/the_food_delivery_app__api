import mongoose, { Schema } from 'mongoose';

const shopSchema = new Schema({
  name: { type: String, required: true, unique: true },
});

const ShopModel = mongoose.model('Shop', shopSchema);

export default ShopModel;
