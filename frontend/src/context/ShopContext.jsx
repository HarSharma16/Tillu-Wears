import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify"; 
import { useNavigate } from "react-router-dom";
import axios from "axios";
export const ShopContext = createContext();

const ShopContextProvider = (props)=> {

const currency = '₹';
const delivery_fee = 10;
const backendUrl = import.meta.env.VITE_BACKEND_URL || "http://localhost:5000";
const [search,setSearch] = useState('');
const [showSearch,setShowSearch] = useState()
const [token, setToken] = useState('')
const [cartItems, setCartItems] = useState(() => {
  try {
    const saved = localStorage.getItem('cartItems');
    return saved ? JSON.parse(saved) : {};
  } catch (_) {
    return {};
  }
});
const [products, setProducts] = useState([]);
const navigate = useNavigate();

const addToCart = async (itemId,size) => {
  try {
    if(!size){
      toast.error('Select product Size');
      return;
    }

    if(!itemId){
      toast.error('Invalid product');
      return;
    }

    // Update local state immediately for better UX
    let cartData = JSON.parse(JSON.stringify(cartItems));
    if (cartData[itemId]) {
      if (cartData[itemId][size]){
        cartData[itemId][size] += 1;
      }
      else {
        cartData[itemId][size] = 1;
      }
    }
    else{
      cartData[itemId] = {};
      cartData[itemId][size] = 1;
    }
    setCartItems(cartData);

    // Save to database if user is logged in
    if (token) {
      try {
        const response = await axios.post(`${backendUrl}/api/cart/add`, 
          { itemId, size, quantity: 1 }, 
          { headers: { token } }
        );
        if (!response.data.success) {
          toast.error(response.data.message || 'Failed to save to database');
        }
      } catch (error) {
        console.error('Database save error:', error);
        toast.error('Failed to save to database');
      }
    }

    toast.success('Added to cart');
  } catch (error) {
    console.error('Error adding to cart:', error);
    toast.error('Failed to add item to cart');
  }
}

const getCartCount = () => {
  let totalCount = 0;
  for (const itemId in cartItems) {
    for (const size in cartItems[itemId]) {
      try {
        if (cartItems[itemId][size] > 0) {
          totalCount += cartItems[itemId][size];
        }
      } catch (error) {}
    }
  }
  return totalCount;
}


const updateQuantity = async (itemId, size, quantity) => {
  try {
    const cartData = JSON.parse(JSON.stringify(cartItems));
    if (!cartData[itemId]) return;
    if (quantity <= 0) {
      delete cartData[itemId][size];
      if (Object.keys(cartData[itemId]).length === 0) {
        delete cartData[itemId];
      }
    } else {
      cartData[itemId][size] = quantity;
    }
    setCartItems(cartData);
  } catch (error) {
    console.error('Error updating quantity:', error);
    toast.error('Failed to update quantity');
  }
}

const getCartAmount = () => {
  let totalAmount = 0;
  for (const itemId in cartItems) {
    const itemInfo = products.find((product) => product._id === itemId);
    if (!itemInfo) continue;
    for (const size in cartItems[itemId]) {
      try {
        const qty = cartItems[itemId][size];
        if (qty > 0) {
          totalAmount += itemInfo.price * qty;
        }
      } catch (_) {}
    }
  }
  return totalAmount;
}

const getProduct = async()=>{
  try {
    const response = await axios.get(backendUrl + "/api/product/list")
    if(response.data.success){
      setProducts(response.data.products)
    } else{
      toast.error(response.data.message)
    }
  } catch (error) {
    console.log(error);
    toast.error(error.message)
  }
}

const loadCartFromDatabase = async () => {
  if (!token) return;
  
  try {
    const response = await axios.get(`${backendUrl}/api/cart/get`, {
      headers: { token }
    });
    
    if (response.data.success && response.data.cart) {
      // Convert database cart format to local format
      const dbCart = {};
      response.data.cart.items.forEach(item => {
        if (!dbCart[item.itemId._id]) {
          dbCart[item.itemId._id] = {};
        }
        dbCart[item.itemId._id][item.size] = item.quantity;
      });
      setCartItems(dbCart);
    }
  } catch (error) {
    console.error('Error loading cart from database:', error);
  }
}

useEffect(()=>{
  getProduct();
  // restore token on mount
  try {
    const savedToken = localStorage.getItem('token');
    if (savedToken) setToken(savedToken);
  } catch (_) {}
},[])

// Load cart from database when token changes
useEffect(() => {
  if (token) {
    loadCartFromDatabase();
  }
}, [token])

// persist cart changes
useEffect(() => {
  try {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  } catch (_) {}
}, [cartItems])

const value = {
        products,currency,delivery_fee,
        search,setSearch,showSearch,setShowSearch,
        cartItems,addToCart,
        getCartCount,updateQuantity,
        getCartAmount,navigate, backendUrl,
        token, setToken
}
    return (
        <ShopContext.Provider value={value}>
          {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;