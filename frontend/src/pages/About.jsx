import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'

const About = () => {
  return (
    <div>

      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>
      <div className='my-10 flex flexx-col md:flex-row gap-16'>
        <img className=' md:max-w-[550xp]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
        <p>Our brand was born out of a love for style, culture, and the desire to make fashion accessible to everyone. What started as a simple idea—to bring timeless ethnic and contemporary fashion to your fingertips—has grown into a vibrant online destination for trendsetters and tradition lovers alike.</p>
        <p>Since our launch, we've dedicated ourselves to curating a thoughtfully crafted collection of clothing that blends elegance, comfort, and quality. From festive kurtas and embroidered sarees to everyday fusion wear and statement pieces, our range celebrates individuality and style.</p>
        <p>We believe that fashion is not just about clothing; it's about expressing who you are. Our mission is to empower you to dress with confidence, whether you're stepping out for a casual day or dressing up for a special occasion.</p>
        <p>At the heart of our brand is a commitment to quality and craftsmanship. We work closely with skilled artisans and manufacturers to ensure that every piece we offer meets our high standards of excellence. Our goal is to provide you with clothing that not only looks good but feels good too.</p>
        <b className='text-gray-800'>OUR MISSION</b>
        <p> Our mission at Forever is to empower customers with choice, convenience, and confidence. We're dedicated to providing a seamless shopping experience that exceeds expectations, from browsing and ordering to delivery and beyond.</p>
        </div>
      </div>
      {/*------------------ Our Policy Section---------------------- */}
    <div className='text-4xl pt-8 border-t'>
        <Title text1={'WHY'} text2={'CHOOSE US'} />
       </div>
      <div className='flex flex-col md:flex-row text-sm mb-20 gap-8 md:gap-0'>
        <div className='border px-10 sm:py-20 flex flex-col items-center gap-5 w-full md:w-1/3'>
          <img src={assets.quality_icon} alt="Quality" className='w-16 h-16 object-contain mx-auto'/>
          <p className='text-lg font-medium'>Quality Assurance</p>
          <p className='text-gray-600 text-center'>We ensure the highest quality standards in every piece we offer, from fabric to finish.</p>
        </div>
        <div className='border px-10 sm:py-20 flex flex-col items-center gap-5 w-full md:w-1/3'>
          <img src={assets.variety_icon} alt="Variety" className='w-16 h-16 object-contain mx-auto'/>
          <p className='text-lg font-medium'>Wide Variety</p>
          <p className='text-gray-600 text-center'>Explore a diverse range of styles, sizes, and designs to suit every taste and occasion.</p>
        </div>
        <div className='border px-10 sm:py-20 flex flex-col items-center gap-5 w-full md:w-1/3'>
          <img src={assets.support_img} alt="Support" className='w-16 h-16 object-contain mx-auto'/>
          <p className='text-lg font-medium'>Customer Support</p>
          <p className='text-gray-600 text-center'>Our dedicated support team is here to assist you with any queries or concerns.</p>
        </div>
      </div>
      <NewsLetterBox/>
    </div>
   )
}

export default About
