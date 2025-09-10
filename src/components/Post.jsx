import React, { useEffect, useState } from 'react'
import { FaCartPlus, FaHeart } from 'react-icons/fa'
import { MdAutorenew } from 'react-icons/md'
import { Link } from 'react-router-dom'

const Post = ({allPage, filterShow, listView}) => {

  let [cateFilterShow, setCateFilterShow] = useState([])
  useEffect(()=>{
    let cateAll = filterShow.slice(0, 5)
    setCateFilterShow(cateAll)
  }, [filterShow])

  let [showAll, setShowAll] = useState(true)
  let handleShowMore = ()=>{
    setCateFilterShow(filterShow)
    setShowAll(false)
  }

  let handleShoLess = ()=>{
    let cateAll = filterShow.slice(0, 5)
    setCateFilterShow(cateAll)
    setShowAll(true)
  }

  return (
    <div>
      {cateFilterShow.length > 0 ?
        <div>
          <div className={`${listView == "active" ? "w-full" : "w-full flex flex-wrap justify-between"}`}>
            {cateFilterShow.map((item, index) => (
              <div key={index} className={`shadow-xl bg-gray-200 rounded-[5px] mb-4 ${listView == "active" ? "w-[100%]" : "w-[49%] md:w-[32%]"}`}>
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
            ))}
          </div>
          <div className='mt-4'>
          {filterShow.length > 5 && 
          showAll ? 
          <h2 onClick={handleShowMore} className="px-4 py-2 cursor-pointer text-blue-500 text-lg bg-gray-50 border-2 border-[#0000001e] rounded-md hover:bg-blue-100 inline select-none">Show More</h2> 
          : filterShow.length > 5 && 
          <h2 onClick={handleShoLess} className="px-4 py-2 cursor-pointer text-blue-500 text-lg bg-gray-50 border-2 border-[#0000001e] rounded-md hover:bg-blue-100 inline select-none">Show Less </h2>
          }
          </div>
        </div>
        :
        <div className={`${listView == 'active' ? "w-full" : "w-full flex flex-wrap justify-between"}`}>
          {allPage.map((item, index) => (
            <div key={index} className={`shadow-xl bg-gray-200 rounded-[5px] mb-4 ${listView == 'active' ? "w-[100%]" : "w-[49%] md:w-[32%]"}`}>
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
          ))}
        </div>
      }
    </div>

    // {filterShow.length > 5 && showAll ? <h2 className="px-4 py-2 cursor-pointer text-blue-500 text-lg bg-gray-50 border-2 border-[#0000001e] rounded-md hover:bg-blue-100 inline select-none" onClick={handleShowMore}>
    //         Show More
    //       </h2> : filterShow.length > 5 && <h2 className="px-4 py-2 cursor-pointer text-blue-500 text-lg bg-gray-50 border-2 border-[#0000001e] rounded-md hover:bg-blue-100 inline select-none">
    //         Show Less </h2>}
  )
}

export default Post