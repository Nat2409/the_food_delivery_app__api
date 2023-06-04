import { Router } from 'express';
import { shopsList } from '../controllers/shops.js';
import { goodsList } from '../controllers/goods.js';
import ShopModel from '../schemas/shops.js';
import GoodModel from '../schemas/goods.js';

const router = Router();

router.get('/api/shops', async (req, res) => {
  let shops = await ShopModel.find();
  console.log('shops: ', shops);
  if (!shops.length) {
    const shopsGoods = shopsList.map(async shop => {
      const newShop = await ShopModel.create({ name: shop.name });
      return goodsList
        .filter(good => good.shopId === shop.id)
        .map(good => {
          return GoodModel.create({
            name: good.name,
            amount: good.amount,
            price: good.price,
            shopId: newShop._id,
            image: good.image,
          });
        });
    });
    await Promise.all(shopsGoods);
    shops = await ShopModel.find();
  }

  res.status(200).json(shops);
});

// router.post('/api/shoppingCart', create);

// router.delete('/api/shoppingCart/:id', remove);

// router.post('/api/orders', create);

export default router;
