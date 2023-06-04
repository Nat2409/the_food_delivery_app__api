import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import { config } from 'dotenv';

import shopsRoutes from './routes/shops.js';
import goodsRoutes from './routes/goods.js';

config();
const PORT = process.env.PORT || 3001;
const MONGO_URL = process.env.MONGO_URL;
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(shopsRoutes);
app.use(goodsRoutes);

mongoose.connect(MONGO_URL).then(() => {
  console.log('Connected');
  app.listen(PORT, () =>
    console.log('Server started listening on port:', PORT)
  );
});
