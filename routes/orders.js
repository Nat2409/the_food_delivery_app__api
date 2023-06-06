import { Router } from 'express';
import OrderModel from '../schemas/orders.js';
const router = Router();

router.post('/api/orders', async (req, res) => {
  const order = req.body;
  const countOfDocuments = await OrderModel.count();
  console.log('countOf: ', countOfDocuments);

  const newOrder = await OrderModel.create({
    orderNumber: countOfDocuments + 1,
    name: order.userName,
    email: order.userEmail,
    phone: order.userPhone,
    address: order.userAddress,
    totalPriceForOrder: order.TotalPriceForOrder,
    orderedProducts: order.order,
  });
  console.log('create: ', newOrder);
  return res.status(200).json(newOrder);
});

router.get('/api/orders', async (req, res) => {
  const orders = await OrderModel.find();
  return res.status(200).json(orders);
});

export default router;
