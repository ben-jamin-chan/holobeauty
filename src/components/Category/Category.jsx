import React from 'react'
import Image1 from "../../assets/category/1732036409-layers-of-hydration-skincare-set-1pce-packshot-default-100868-9549536428062.avif"
import Image2 from '../../assets/category/la-mer-1.webp'
import Image3 from '../../assets/category/Cleansing_Essentials_Set_Products.webp'
import Button from '../Shared/Button'

const Category = () => {
  return (
    <div className='py-8'>
      <div className='container'>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* First col */}
            <div className='py-10 pl-5 bg-gradient-to-br from-black/70 to-black/90 text-white rounded-3xl relative h-[320px] flex items-end'>
                <div>
                    <div className='mb-4'>
                        <p className='mb-[2px] text-gray-400'>Enjoy</p>
                        <p className='text-2xl font-semibold mb-[2px]'>With</p>
                        <p className='text-4xl xl:text-5xl font-bold opacity-20 mb-2'>Epicutis</p>
                        <Button
                        text="Browse"
                        bgColor={"bg-white"}
                        textColor={"text-black"}
                        />
                    </div>
                </div>
                <img 
                src={Image3} 
                alt="" 
                className='absolute w-[320px] h-[320px] -right-[85px] top-1/2 -translate-y-1/2 sm:top-[180px] lg:top-[200px]'
                />
            </div>
            {/* Second col */}
            <div className='py-10 pl-5 bg-gradient-to-br from-brandYellow/80 to-brandYellow/90 text-white rounded-3xl relative h-[320px] flex items-end'>
                <div>
                    <div className='mb-4'>
                        <p className='mb-[2px] text-white'>Enjoy</p>
                        <p className='text-2xl font-semibold mb-[2px]'>With</p>
                        <p className='text-4xl xl:text-5xl font-bold opacity-40 mb-2'>La Mer</p>
                        <Button
                        text="Browse"
                        bgColor={"bg-white"}
                        textColor={"text-brandYellow"}
                        />
                    </div>
                </div>
                <img 
                src={Image2} 
                alt="" 
                className='absolute w-[280px] -right-12 -translate-y-1/2 lg:top-[120px] top-[180px]'
                />
            </div>
            {/* Third col */}
            <div className='sm:col-span-2 py-10 pl-5 bg-gradient-to-br from-gray-500/60 to-gray-200/50 text-white rounded-3xl relative h-[320px] flex items-end'> 
                <div>
                    <div className='mb-4 '>
                        <p className='mb-[2px] text-white'>Enjoy</p>
                        <p className='text-2xl font-semibold mb-[2px]'>Your</p>
                        <p className='text-4xl xl:text-5xl font-bold opacity-40 mb-2'>Chanel</p>
                        <Button
                        text="Browse"
                        bgColor={"bg-white"}
                        textColor={"text-gray-500"}
                        />
                    </div>
                </div>
                <img 
                src={Image1} 
                alt="" 
                className='absolute w-[270px] top-1/2 -translate-y-1/2 -right-0'
                />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Category
