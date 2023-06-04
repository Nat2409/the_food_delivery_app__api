import { Router } from 'express';
import GoodModel from '../schemas/goods.js';
const router = Router();

router.get('/api/goods/:id', async (req, res) => {
  const goods = await GoodModel.find({ shopId: req.params.id });
  return res.status(200).json(goods);
});

export default router;
