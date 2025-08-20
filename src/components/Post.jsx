import React from 'react'
import { FaCartPlus, FaHeart } from 'react-icons/fa'
import { MdAutorenew } from 'react-icons/md'
import { Link } from 'react-router-dom'

const Post = ({allPage, filterShow, brandShow}) => {
  return (
    <div className='grid grid-cols-2 md:grid-cols-3 gap-4'>
      {filterShow.length > 0 ? filterShow.map((item, index) => (
        <div key={index} className='w-full shadow-xl bg-gray-200 rounded-[5px]'>
          <div className='bg-[#ffffff] py-2 rounded-t-[5px] border-1 border-gray-200 relative group'>
            <Link to={`/shop/products/${item.id}`} target='_top'>
              <img src={item.thumbnail} alt="" />
            </Link>
            <div className='absolute right-0 bottom-0 bg-white w-full opacity-0 group-hover:opacity-100 py-2'>
              <div className='pr-4'>
                <div className='flex items-center justify-end cursor-pointer text-[#767676] text-[16px] font-dms font-medium hover:text-[#262626]'>
                  <p className='pr-2'>Add to Wish List</p>
                  <FaHeart />
                </div>
              </div>
              <div className='pr-4 py-2'>
                <div className='flex items-center justify-end cursor-pointer text-[#767676] text-[16px] font-dms font-medium hover:text-[#262626]'>
                  <p className='pr-2'>Compare</p>
                  <MdAutorenew className='text-xl' />
                </div>
              </div>
              <div className='pr-4'>
                <div className='flex items-center justify-end cursor-pointer text-[#767676] text-[16px] font-dms font-medium hover:text-[#262626]'>
                  <p className='pr-2'>Add to Cart</p>
                  <FaCartPlus />
                </div>
              </div>
            </div>
          </div>
          <h1 className='font-dms font-bold text-[12px] md:text-[16px] lg:text-[18px] pl-4 py-3'>{item.title}</h1>
          <h4 className='text-red-600 pl-4 pb-3'>Price: {item.price}$</h4>
          <h4 className='text-black pl-4 pb-3'>Stock: {item.stock}</h4>
        </div>
      )) : brandShow.length > 0 ? brandShow.map((item, index)=>(
        <div key={index} className='w-full shadow-xl bg-gray-200 rounded-[5px]'>
          <div className='bg-[#ffffff] py-2 rounded-t-[5px] border-1 border-gray-200 relative group'>
            <Link to={`/shop/products/${item.id}`} target='_top'>
              <img src={item.thumbnail} alt="" />
            </Link>
            <div className='absolute right-0 bottom-0 bg-white w-full opacity-0 group-hover:opacity-100 py-2'>
              <div className='pr-4'>
                <div className='flex items-center justify-end cursor-pointer text-[#767676] text-[16px] font-dms font-medium hover:text-[#262626]'>
                  <p className='pr-2'>Add to Wish List</p>
                  <FaHeart />
                </div>
              </div>
              <div className='pr-4 py-2'>
                <div className='flex items-center justify-end cursor-pointer text-[#767676] text-[16px] font-dms font-medium hover:text-[#262626]'>
                  <p className='pr-2'>Compare</p>
                  <MdAutorenew className='text-xl' />
                </div>
              </div>
              <div className='pr-4'>
                <div className='flex items-center justify-end cursor-pointer text-[#767676] text-[16px] font-dms font-medium hover:text-[#262626]'>
                  <p className='pr-2'>Add to Cart</p>
                  <FaCartPlus />
                </div>
              </div>
            </div>
          </div>
          <h1 className='font-dms font-bold text-[12px] md:text-[16px] lg:text-[18px] pl-4 py-3'>{item.title}</h1>
          <h4 className='text-red-600 pl-4 pb-3'>Price: {item.price}$</h4>
          <h4 className='text-black pl-4 pb-3'>Stock: {item.stock}</h4>
        </div>
      )) : allPage.map((item, index) => (
        <div key={index} className='w-full shadow-xl bg-gray-200 rounded-[5px]'>
          <div className='bg-[#ffffff] py-2 rounded-t-[5px] border-1 border-gray-200 relative group'>
            <Link to={`/shop/products/${item.id}`} target='_top'>
              <img src={item.thumbnail} alt="" />
            </Link>
            <div className='absolute right-0 bottom-0 bg-white w-full opacity-0 group-hover:opacity-100 py-2'>
              <div className='pr-4'>
                <div className='flex items-center justify-end cursor-pointer text-[#767676] text-[16px] font-dms font-medium hover:text-[#262626]'>
                  <p className='pr-2'>Add to Wish List</p>
                  <FaHeart />
                </div>
              </div>
              <div className='pr-4 py-2'>
                <div className='flex items-center justify-end cursor-pointer text-[#767676] text-[16px] font-dms font-medium hover:text-[#262626]'>
                  <p className='pr-2'>Compare</p>
                  <MdAutorenew className='text-xl' />
                </div>
              </div>
              <div className='pr-4'>
                <div className='flex items-center justify-end cursor-pointer text-[#767676] text-[16px] font-dms font-medium hover:text-[#262626]'>
                  <p className='pr-2'>Add to Cart</p>
                  <FaCartPlus />
                </div>
              </div>
            </div>
          </div>
          <h1 className='font-dms font-bold text-[12px] md:text-[16px] lg:text-[18px] pl-4 py-3'>{item.title}</h1>
          <h4 className='text-red-600 pl-4 pb-3'>Price: {item.price}$</h4>
          <h4 className='text-black pl-4 pb-3'>Stock: {item.stock}</h4>
        </div>
      )) }
    </div>
  )
}

export default Post