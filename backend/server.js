import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/mongodb.js';
import { v2 as cloudinary } from "cloudinary";
import userRouter from './routes/userRoute.js';
import productRouter from './routes/productRoute.js';
import cartRouter from './routes/cartRoute.js';

dotenv.config(); // Ensure dotenv is loaded

//App config
const app = express();
const port = process.env.PORT || 5000;
connectDB();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_SECRET_KEY,
});

//Middleware
app.use(express.json());
app.use(cors());

//API endpoints
app.use('/api/user',userRouter)
app.use('/api/product', productRouter);
app.use('/api/cart', cartRouter); 

app.get('/', (req, res) => {
    res.send('API is running');
});

app.listen(port, () => console.log('Server is running on PORT: ' + port));