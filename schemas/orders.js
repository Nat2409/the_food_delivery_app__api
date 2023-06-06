import mongoose, { Schema, ObjectId } from 'mongoose';

const orderSchema = new Schema({
  orderNumber: { type: Number, required: true },
  name: { type: String },
  email: { type: String },
  phone: { type: String },
  address: { type: String },
  totalPriceForOrder: { type: Number, required: true },
  orderedProducts: { type: Array, required: true },
});

const OrderModel = mongoose.model('Order', orderSchema);

export default OrderModel;
