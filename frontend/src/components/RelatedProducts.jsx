import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import ProductItem from './ProductItem';

const RelatedProducts = ({category,subCategory}) => {
    const {products} = useContext(ShopContext);
    const [related, setRelated] = useState([]);

    useEffect(() => {
        if (products.length > 0){
            let productsCopy = products.slice();
            productsCopy = productsCopy.filter((item) => item.category === category);
            productsCopy = productsCopy.filter((item) => item.subCategory === subCategory);
            setRelated(productsCopy.slice(0,5));
        }
    },[products, category, subCategory])

    return (
    <div className='my-24'>
        <div className='text-center py-8 text-3xl'>
            <Title text1={'RELATED'} text2={'PRODUCTS'} />
        </div>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
            {related.map((item, index) => (
                <ProductItem key={index} id={item._id} name={item.name} price={item.price} image={Array.isArray(item.image) ? item.image[0] : item.image} className='border p-4 rounded-lg hover:shadow  transition-shadow duration-300'/>
            ))}
        </div>
    </div>
  )
}

export default RelatedProducts
