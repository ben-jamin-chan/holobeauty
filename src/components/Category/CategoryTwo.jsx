import React from 'react'
import Image1 from "../../assets/category/sk-2-1.webp"
import Image2 from '../../assets/category/estee-lauder-2.avif'
import Image3 from '../../assets/category/laneige-1.webp'
import Button from '../Shared/Button'

const CategoryTwo = () => {
  return (
    <div className='py-8'>
      <div className='container'>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* First col */}
            <div className='sm:col-span-2 py-10 pl-5 bg-gradient-to-br from-primary/80  to-primary/100 text-white rounded-3xl relative h-[320px] flex items-end'>
                <div>
                    <div className='mb-4 '>
                        <p className='mb-[2px] text-white'>Enjoy</p>
                        <p className='text-2xl font-semibold mb-[2px]'>With</p>
                        <p className='text-4xl xl:text-5xl font-bold opacity-80 mb-2'>SK-II</p>
                        <Button
                        text="Browse"
                        bgColor={"bg-white"}
                        textColor={"text-primary"}
                        />
                    </div>
                </div>
                <img 
                src={Image1} 
                alt="" 
                className='absolute w-[240px] top-1/2 -translate-y-1/2 right-3 xl:w-[300px]'
                />
            </div>
            {/* Second col */}
            <div className='py-10 pl-5 bg-gradient-to-br from-yellow-700/80 to-yellow-800 text-white rounded-3xl relative h-[320px] flex items-start'>
                <div>
                    <div className='mb-4'>
                        <p className='mb-[2px] text-gray-400'>Enjoy</p>
                        <p className='text-2xl font-semibold mb-[2px]'>With</p>
                        <p className='text-4xl xl:text-5xl font-bold opacity-20 mb-2'>Estee Lauder</p>
                        <Button
                        text="Browse"
                        bgColor={"bg-white"}
                        textColor={"text-yellow-800"}
                        />
                    </div>
                </div>
                <img 
                src={Image2} 
                alt="" 
                className='absolute w-[230px] bottom-0 right-0'
                />
            </div>
            {/* Third col */}
            <div className='py-10 pl-5 bg-gradient-to-br from-brandBlue/60 to-brandBlue/90 text-white rounded-3xl relative h-[320px] flex items-start'>
                <div>
                    <div className='mb-4'>
                        <p className='mb-[2px] text-white'>Enjoy</p>
                        <p className='text-2xl font-semibold mb-[2px]'>With</p>
                        <p className='text-4xl xl:text-5xl font-bold opacity-40 mb-2'>Laneige</p>
                        <Button
                        text="Browse"
                        bgColor={"bg-white"}
                        textColor={"text-brandBlue"}
                        />
                    </div>
                </div>
                <img 
                src={Image3} 
                alt="" 
                className='absolute w-[200px] bottom-0 right-0'
                />
            </div>
        </div>
      </div>
    </div>
  )
}

export default CategoryTwo
