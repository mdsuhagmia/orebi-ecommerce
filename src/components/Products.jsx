import React, { useContext, useEffect, useRef, useState } from 'react'
import Container from '../components/Container'
import { NavLink } from 'react-router-dom'
import { IoIosArrowForward, } from 'react-icons/io'
import { HiViewGrid } from 'react-icons/hi'
import { FaList } from 'react-icons/fa'
import { ApiData } from './ContextApi'
import Post from './Post'

const Products = () => {
  let info = useContext(ApiData)
  let [category, setCategory] = useState(false)
  let [color, setColor] = useState(false)
  let [brand, setBrand] = useState(false)
  let [price, setPrice] = useState(false)
  let categoryRef = useRef()
  let colorRef = useRef()
  let brandRef = useRef()
  let priceRef = useRef()
  useEffect(()=>{
    document.addEventListener("click", (e)=>{
      if(categoryRef.current.contains(e.target)){
      setCategory(!category)
    }else{
      setCategory(false)
    }if(colorRef.current.contains(e.target)){
      setColor(!color)
    }else{
      setColor(false)
    }if(brandRef.current.contains(e.target)){
      setBrand(!brand)
    }else{
      setBrand(false)
    }if(priceRef.current.contains(e.target)){
      setPrice(!price)
    }else{
      setPrice(false)
    }
    })
  }, [category, color, brand, price])
  return (
    <>
    <section className='py-[54px] md:py-[64px] lg:py-[80px]'>
      <Container>
        <div className='pb-10 md:pb-16'>
          <h2 className='text-[#262626] text-[39px] md:text-[49px] font-bold font-dms pb-[2px]'>Products</h2>
          <ul className='flex'>
            <li>
              <NavLink to={"/"}
                className={({ isActive }) => `text-[14px] font-dms font-bold ${isActive ? "text-[#262626]" : "text-[#767676]"}`}>
                Home
              </NavLink>
            </li>
            <IoIosArrowForward className='mt-2' />
            <li className='mt-[2px]'>
              <NavLink to={"/shop"}
                className={({ isActive }) => `text-[14px] font-dms font-bold ${isActive ? "text-[#262626]" : "text-[#767676]"}`}>
                Shop
              </NavLink>
            </li>
          </ul>
        </div>
        <div className='flex justify-between'>
          <div className='w-[22%] pt-2'>

            <div className='pb-2 border-1 border-[#00000064] pt-2 rounded-[5px] mb-4'>
              <h4 ref={categoryRef} className='text-[#262626] text-[20px] font-bold font-dms cursor-pointer hover:text-[#26262695] pl-2'>Shop by Category</h4>
              {category && (
              <div className='py-4'>
                <ul className=''>
                  <li className='py-2 hover:bg-gray-200 rounded-[5px]'>
                    <a href="#"
                      className='text-[#767676] text-[16px] font-dms font-medium pl-4'>
                      Category 1
                    </a>
                  </li>
                  <li className='py-2 hover:bg-gray-200 rounded-[5px]'>
                    <a href="#"
                      className='text-[#767676] text-[16px] font-dms font-medium pl-4'>
                      Category 1
                    </a>
                  </li>
                  <li className='py-2 hover:bg-gray-200 rounded-[5px]'>
                    <a href="#"
                      className='text-[#767676] text-[16px] font-dms font-medium pl-4'>
                      Category 1
                    </a>
                  </li>
                  <li className='py-2 hover:bg-gray-200 rounded-[5px]'>
                    <a href="#"
                      className='text-[#767676] text-[16px] font-dms font-medium pl-4'>
                      Category 1
                    </a>
                  </li>
                  <li className='py-2 hover:bg-gray-200 rounded-[5px]'>
                    <a href="#"
                      className='text-[#767676] text-[16px] font-dms font-medium pl-4'>
                      Category 1
                    </a>
                  </li>
                </ul>
              </div>
              )}
            </div>

            <div className='pb-2 border-1 border-[#00000064] pt-2 rounded-[5px] mb-4'>
              <h4 ref={colorRef} className='text-[#262626] text-[20px] font-bold font-dms cursor-pointer hover:text-[#26262695] pl-2'>Shop by Color</h4>
              {color && (
              <div className='py-4'>
                <ul className=''>
                  <li className='py-2 hover:bg-gray-200 rounded-[5px] relative'>
                    <div className="absolute top-[50%] translate-y-[-50%] left-4 after:content-[''] after:block after:w-[12px] after:h-[12px] after:rounded-full after:bg-black"></div>
                    <a href="#"
                      className='text-[#767676] text-[16px] font-dms font-medium pl-12'>
                     Color 1
                    </a>
                  </li>
                  <li className='relative py-2 hover:bg-gray-200 rounded-[5px]'>
                    <div className="absolute top-[50%] translate-y-[-50%] left-4 after:content-[''] after:block after:w-[12px] after:h-[12px] after:rounded-full after:bg-[#FF8686]"></div>
                    <a href="#"
                      className='text-[#767676] text-[16px] font-dms font-medium pl-12'>
                      Color 2
                    </a>
                  </li>
                  <li className='relative py-2 hover:bg-gray-200 rounded-[5px]'>
                    <div className="absolute top-[50%] translate-y-[-50%] left-4 after:content-[''] after:block after:w-[12px] after:h-[12px] after:rounded-full after:bg-[#7ED321]"></div>
                    <a href="#"
                      className='text-[#767676] text-[16px] font-dms font-medium pl-12'>
                      Color 3
                    </a>
                  </li>
                  <li className='relative py-2 hover:bg-gray-200 rounded-[5px]'>
                    <div className="absolute top-[50%] translate-y-[-50%] left-4 after:content-[''] after:block after:w-[12px] after:h-[12px] after:rounded-full after:bg-[#B6B6B6]"></div>
                    <a href="#"
                      className='text-[#767676] text-[16px] font-dms font-medium pl-12'>
                      Color 4
                    </a>
                  </li>
                  <li className='relative py-2 hover:bg-gray-200 rounded-[5px]'>
                    <div className="absolute top-[50%] translate-y-[-50%] left-4 after:content-[''] after:block after:w-[12px] after:h-[12px] after:rounded-full after:bg-[#15CBA5]"></div>
                    <a href="#"
                      className='text-[#767676] text-[16px] font-dms font-medium pl-12'>
                      Color 5
                    </a>
                  </li>
                </ul>
              </div>
              )}
            </div>

            <div className='pb-2 border-1 border-[#00000064] pt-2 rounded-[5px] mb-4'>
              <h4 ref={brandRef} className='text-[#262626] text-[20px] font-bold font-dms cursor-pointer hover:text-[#26262695] pl-2'>Shop by Brand</h4>
              {brand && (
              <div className='py-4'>
                <ul className=''>
                  <li className='py-2 hover:bg-gray-200 rounded-[5px]'>
                    <a href="#"
                      className='text-[#767676] text-[16px] font-dms font-medium pl-4'>
                      Brand 1
                    </a>
                  </li>
                  <li className='py-2 hover:bg-gray-200 rounded-[5px]'>
                    <a href="#"
                      className='text-[#767676] text-[16px] font-dms font-medium pl-4'>
                      Brand 2
                    </a>
                  </li>
                  <li className='py-2 hover:bg-gray-200 rounded-[5px]'>
                    <a href="#"
                      className='text-[#767676] text-[16px] font-dms font-medium pl-4'>
                      Brand 3
                    </a>
                  </li>
                  <li className='py-2 hover:bg-gray-200 rounded-[5px]'>
                    <a href="#"
                      className='text-[#767676] text-[16px] font-dms font-medium pl-4'>
                      Brand 4
                    </a>
                  </li>
                  <li className='py-2 hover:bg-gray-200 rounded-[5px]'>
                    <a href="#"
                      className='text-[#767676] text-[16px] font-dms font-medium pl-4'>
                      Brand 5
                    </a>
                  </li>
                </ul>
              </div>
              )}
            </div>
            
            <div className='pb-2 border-1 border-[#00000064] pt-2 rounded-[5px] mb-4'>
              <h4 ref={priceRef} className='text-[#262626] text-[20px] font-bold font-dms cursor-pointer hover:text-[#26262695] pl-2'>Shop by Price</h4>
              {price && (
              <div className='py-4'>
                <ul className=''>
                  <li className='py-2 hover:bg-gray-200 rounded-[5px]'>
                    <a href="#"
                      className='text-[#767676] text-[16px] font-dms font-medium pl-4'>
                      $0.00 - $9.99
                    </a>
                  </li>
                  <li className='py-2 hover:bg-gray-200 rounded-[5px]'>
                    <a href="#"
                      className='text-[#767676] text-[16px] font-dms font-medium pl-4'>
                      $10.00 - $19.99
                    </a>
                  </li>
                  <li className='py-2 hover:bg-gray-200 rounded-[5px]'>
                    <a href="#"
                      className='text-[#767676] text-[16px] font-dms font-medium pl-4'>
                      $20.00 - $29.99
                    </a>
                  </li>
                  <li className='py-2 hover:bg-gray-200 rounded-[5px]'>
                    <a href="#"
                      className='text-[#767676] text-[16px] font-dms font-medium pl-4'>
                      $30.00 - $39.99
                    </a>
                  </li>
                  <li className='py-2 hover:bg-gray-200 rounded-[5px]'>
                    <a href="#"
                      className='text-[#767676] text-[16px] font-dms font-medium pl-4'>
                      $40.00 - $69.99
                    </a>
                  </li>
                </ul>
              </div>
              )}
            </div>
          </div>

          <div className='w-[75%]'>
            <div className='flex items-center pb-[60px]'>
              <div className='w-2/5'>
                <div className='flex gap-6'>
                  <HiViewGrid className='text-white bg-black p-1 text-xl cursor-pointer' />
                  <FaList className='cursor-pointer' />
                </div>
              </div>
              <div className='w-2/5'>
                <div className='flex items-center'>
                  <h6 className='pr-2'>Sort by:</h6>
                  <div className=''>
                    <input type="search" 
                      className='h-[30px] w-[200px] border-1 border-[#00000036] outline-0 p-2 rounded-[3px]'
                      placeholder='Search'/>
                  </div>
                </div>
              </div>
              <div className='w-1/5'>
                <div className='flex items-center justify-end'>
                  <h6 className='pr-2'>Show:</h6>
                  <div className=''>
                    <select name="" id="" className='border-1 border-[#00000036] px-4 py-[3px] outline-0 rounded-[3px]'>
                      <option value="">6</option>
                      <option value="">9</option>
                      <option value="">12</option>
                      <option value="">15</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <Post info={info}/>
          </div>
        </div>
      </Container>
    </section>
    </>
  )
}

export default Products