import cartModel from '../models/cartModel.js';

// Add item to cart
const addToCart = async (req, res) => {
    try {
        const { itemId, size, quantity = 1 } = req.body;
        const userId = req.user.id;

        // Check if item already exists in user's cart
        let cart = await cartModel.findOne({ userId });
        
        if (!cart) {
            // Create new cart if doesn't exist
            cart = new cartModel({
                userId,
                items: [{ itemId, size, quantity }]
            });
        } else {
            // Check if item with same size already exists
            const existingItemIndex = cart.items.findIndex(
                item => item.itemId.toString() === itemId && item.size === size
            );

            if (existingItemIndex > -1) {
                // Update quantity if item exists
                cart.items[existingItemIndex].quantity += quantity;
            } else {
                // Add new item
                cart.items.push({ itemId, size, quantity });
            }
        }

        await cart.save();
        res.json({ success: true, message: "Item added to cart", cart });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};

// Get user's cart
const getCart = async (req, res) => {
    try {
        // For testing without auth, return empty cart
        if (!req.user) {
            return res.json({ success: true, cart: { items: [] } });
        }
        
        const userId = req.user.id;
        const cart = await cartModel.findOne({ userId }).populate('items.itemId');
        
        if (!cart) {
            return res.json({ success: true, cart: { items: [] } });
        }
        
        res.json({ success: true, cart });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};

// Update cart item quantity
const updateCartItem = async (req, res) => {
    try {
        const { itemId, size, quantity } = req.body;
        const userId = req.user.id;

        const cart = await cartModel.findOne({ userId });
        if (!cart) {
            return res.json({ success: false, message: "Cart not found" });
        }

        const itemIndex = cart.items.findIndex(
            item => item.itemId.toString() === itemId && item.size === size
        );

        if (itemIndex === -1) {
            return res.json({ success: false, message: "Item not found in cart" });
        }

        if (quantity <= 0) {
            // Remove item if quantity is 0 or less
            cart.items.splice(itemIndex, 1);
        } else {
            // Update quantity
            cart.items[itemIndex].quantity = quantity;
        }

        await cart.save();
        res.json({ success: true, message: "Cart updated", cart });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};

// Remove item from cart
const removeFromCart = async (req, res) => {
    try {
        const { itemId, size } = req.body;
        const userId = req.user.id;

        const cart = await cartModel.findOne({ userId });
        if (!cart) {
            return res.json({ success: false, message: "Cart not found" });
        }

        cart.items = cart.items.filter(
            item => !(item.itemId.toString() === itemId && item.size === size)
        );

        await cart.save();
        res.json({ success: true, message: "Item removed from cart", cart });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};

export { addToCart, getCart, updateCartItem, removeFromCart };