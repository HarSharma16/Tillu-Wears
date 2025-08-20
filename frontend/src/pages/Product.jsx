import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import RelatedProducts from '../components/RelatedProducts';

const Product = () => {

  const {productId} = useParams();
  const {products, currency, addToCart} = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState('');
  const [size, setSize] = useState('');

  const fetchProductData = async () => {

    products.map((item) => {
      if (item._id === productId) {
        setProductData(item);
        setImage(item.image[0])
        return null;
      }
    })
  }

  useEffect(() => {
    fetchProductData();
  }, [productId, products]);

  return productData ? (
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100' > 
{/* Product Details Section */}
    <div className= 'flex gap-10 sm:gap-12 flex-col sm:flex-row items-center justify-center'>
{/* Product Image */}
    <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
      <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
        {
          productData.image.map((img, index) => (
            <img 
              key={index} 
              src={img} 
              alt=''
              className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer hover:scale-110 transition-transform duration-300 ease-in-out' 
              onClick={() => setImage(img)} />
          ))
        }
      </div>
      <div className='w-full sm:w-[80%]'>
        <img className='w-full h-auto' src={image} alt='' />
      </div>
    </div>
{/* Product Info */}
    <div className='flex-1 flex flex-col items-start justify-center gap-3'>
      <h1 className='text-2xl font-medium mt-2 text-gray-600'>{productData.name}</h1>
      <div className='flex items-center gap-2 my-2'>
      <img src={assets.star_icon} alt='' className='w-3 5' />
      <img src={assets.star_icon} alt='' className='w-3 5' />
      <img src={assets.star_icon} alt='' className='w-3 5' />
      <img src={assets.star_icon} alt='' className='w-3 5' />
      <img src={assets.star_dull_icon} alt='' className='w-3 5' />
      <p className='pl-2'>(405)</p>
      </div>
      <p className='mt-5 text-3xl font-medium text-gray-800'>${productData.price}</p>
      <p className='mt-5 text-gray-600 md:w-4/5'>{productData.description}</p>
      <div className='flex flex-con gap-4 my-8'>
        <p>Select Size</p>
      </div>
      <div className='flex gap-2 mb-5'>
        {productData.sizes.map((item, index) => (
          <button onClick={()=>setSize(item)} className={`border px-4 py-2 bg-gray-100 ${item === size ? 'border-orange-500' : ''}`} key={index}>{item}</button>
        ))}
      </div>
      <button onClick={()=>addToCart(productData._id,size)} className='bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition-colors duration-300 active:bg-blue-700'>Add to Cart</button>
      <hr className='mt-8 sm:w-4/5' />
      <div className='flex flex-col gap-2 sm:w-4/5 mt-5'>
      <p>100% Original Product.</p>
      <p>Cash on dilevery is available on this product.</p>
      <p>Easy return and exchange within 7 days.</p>
      </div>
    </div>
    </div>
    {/*-------------------- Description and review section-------------- */}
    <div className='mt-10'>
      <div className='flex'>
       <b className='border px-5 py-3 text:sm'>Description</b>
       <p className='border px-5 py-3 text:sm'>Review (122)</p>
      </div>
      <div className='flex flex-col gap-4 border px-6 py-6 text-sm text-gray-600'>
        <p>An e-commerce website is a digital platform that enables individuals or businesses to buy and sell products or services over the internet. It acts as a virtual storefront, allowing customers to browse through a wide range of offerings, compare products, and make secure payments—all from the comfort of their home. Businesses can showcase their inventory, engage with potential buyers, and manage orders without the need for a physical retail space.</p>
        <p>The growing popularity of e-commerce websites is largely due to their accessibility, convenience, and global reach. They break geographical barriers and operate 24/7, making it possible for brands to serve customers anytime, anywhere.</p>
        <p>Typically, an e-commerce website displays products or services along with detailed descriptions, high-quality images, pricing, and available variations such as size, color, or material. Each product is usually featured on its own dedicated page, providing all necessary information for informed buying decisions. These websites often include features like shopping carts, wishlists, secure checkout systems, customer reviews, and order tracking to enhance the user experience and streamline the shopping journey. </p>
      </div>
    </div>
    {/*-------------------- Related Products Section-------------- */}

    <RelatedProducts category={productData.category} subCategory={productData.subCategory} />
    </div>
  ) : <div className='opacity-0' ></div>
}

export default Product
