import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';

const Collection = () => {
  const {products, search , showSearch } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState('latest');

  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory(category.filter(item => item !== e.target.value));
    } else {
      setCategory([...category, e.target.value]);
    }
  }

  const toggleSubCategory = (e) => {
    if (subCategory.includes(e.target.value)){
      setSubCategory(subCategory.filter(item => item !== e.target.value));
    }
    else{
      setSubCategory([...subCategory, e.target.value]);
    }
  }

  useEffect(() => {
    let productCopy = products.slice();

    if (search) {
      productCopy = productCopy.filter(item => 
        item.name.toLowerCase().includes(search.toLowerCase()) ||
        (item.description && item.description.toLowerCase().includes(search.toLowerCase()))
      );
    }

    if (category.length > 0) {
      productCopy = productCopy.filter(item => category.includes(item.category));
    }

    if (subCategory.length > 0) {
      productCopy = productCopy.filter(item => subCategory.includes(item.subCategory));
    }

    // Apply sorting
    if (sortType === 'low-to-high') {
      productCopy = productCopy.sort((a, b) => a.price - b.price);
    } else if (sortType === 'high-to-low') {
      productCopy = productCopy.sort((a, b) => b.price - a.price);
    }
    // If 'latest', keep filtered order (no sort)

    setFilteredProducts(productCopy);
  }, [category, subCategory, sortType, products, search]);

  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>

      {/* Filter Options */}
      <div className='min-w-60'>
        <p onClick={()=> setShowFilter(!showFilter)} className='my-2 text-xl flex items-center cursor-pointer gap-2'>FILTER
          <img className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`} src={assets.dropdown_icon} alt="" />
        </p>
        {/* Checkbox for Filter */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' :'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium ' >CATEGORIES</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-600'>
            <p className='flex gap-2'>
              <input className='w-4 h-4' type="checkbox" value={'Men'} onChange={toggleCategory}/> Men
            </p>
             <p className='flex gap-2'>
              <input className='w-4 h-4' type="checkbox" value={'Women'} onChange={toggleCategory}/> Women
            </p>
             <p className='flex gap-2'>
              <input className='w-4 h-4' type="checkbox" value={'Kids'} onChange={toggleCategory}/> Kids
            </p>
          </div>
        </div>
        {/* SubCategory Filter */}
        <div className={`border border-gray-300 pl-5 py-3 my-5 ${showFilter ? '' :'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium ' >TYPES</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-600'>
            <p className='flex gap-2'>
              <input className='w-4 h-4' type="checkbox" value={'Topwear'} onChange={toggleSubCategory}/> Topwear
            </p>
             <p className='flex gap-2'>
              <input className='w-4 h-4' type="checkbox" value={'Bottomwear'} onChange={toggleSubCategory}/> Bottomwear
            </p>
             <p className='flex gap-2'>
              <input className='w-4 h-4' type="checkbox" value={'Winterwear'} onChange={toggleSubCategory}/> Winterwear
            </p>
          </div>
        </div>
      </div>
      {/* Right Side Collection */}
      <div className='flex-1'>
        <div className='flex justify-between text-base sm:text-2xl mb-4'>
          <Title text1={'OUR'} text2={'COLLECTION'} />
          {/*products sort*/}
          <select onChange={(e)=>setSortType(e.target.value)} className='border border-gray-300 rounded px-2 py-1 text-sm sm:text-base' name="" id="">
            <option value="latest">Latest</option>
            <option value="low-to-high">Price: Low to High</option>
            <option value="high-to-low">Price: High to Low</option>
            </select>
        </div>
        {/* Map Products */}
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
          {
            filteredProducts.map((item, index) => (
              <ProductItem key={index}
                name={item.name}
                id={item._id}
                price={item.price}
                image={Array.isArray(item.image) ? item.image[0] : item.image} />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Collection
