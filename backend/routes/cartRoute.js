import express from 'express';
import { addToCart, getCart, updateCartItem, removeFromCart } from '../controllers/cartController.js';
import userAuth from '../middleware/userAuth.js';

const cartRouter = express.Router();

cartRouter.post('/add', userAuth, addToCart);
cartRouter.get('/get', getCart);
cartRouter.get('/test', (req, res) => {
    res.json({ success: true, message: "Cart route is working" });
});
cartRouter.put('/update', userAuth, updateCartItem);
cartRouter.delete('/remove', userAuth, removeFromCart);

export default cartRouter;