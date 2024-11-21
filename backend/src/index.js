import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import dbConnection from './database/db.js';
import productRouter from './routes/productRoutes.js';


dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

dbConnection();

app.use('/api/products', productRouter);

app.listen(process.env.PORT, ()=> console.log('Connected to Port: ' + process.env.PORT));