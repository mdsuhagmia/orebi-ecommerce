import React, { useContext, useEffect, useRef, useState } from 'react'
import Container from '../components/Container'
import { NavLink } from 'react-router-dom'
import { IoIosArrowForward, IoMdArrowDropdown, IoMdArrowDropup } from 'react-icons/io'
import { HiViewGrid } from 'react-icons/hi'
import { FaEquals, FaList } from 'react-icons/fa'
import { ApiData } from './ContextApi'
import { FaPlus } from 'react-icons/fa6'

const Products = () => {
  let data = useContext(ApiData)
  let [category, setCategory] = useState(false)
  let categoryRef = useRef()
  useEffect(()=>{
    document.addEventListener("click", (e)=>{
      if(categoryRef.current.contains(e.target)){
      setCategory(!category)
    }else{
      setCategory(false)
    }
    })
  }, [category])
  return (
    <>
    <section className='py-[34px] md:py-[64px] lg:py-[80px]'>
      <Container>
        <div className='pb-0 md:pb-16'>
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
        <div className='flex'>
          <div className='hidden md:block w-1/4'>

            <div className='pb-12 pr-12'>
              <h4 className='hidden md:block text-[#262626] text-[20px] font-bold font-dms pb-[30px]'>Shop by Category</h4>
              <FaEquals className="md:hidden text-xl cursor-pointer mt-[12px]" />
              <div>
                <ul>
                  <li className='py-2 flex justify-between items-center relative'>
                    <a href="#"
                      className='text-[#767676] text-[16px] font-dms font-medium'>
                      Category 1
                    </a>
                    <div ref={categoryRef}>
                        <FaPlus className='cursor-pointer' />
                    </div>
                  </li>
                  {category && 
                      <div className='pl-8'>
                        <ul>
                          <li><a href="#">Subcategory 1</a></li>
                          <li><a href="#">Subcategory 2</a></li>
                          <li><a href="#">Subcategory 3</a></li>
                        </ul>
                      </div>
                    }
                  <li className='py-2'>
                    <a href="#"
                      className='text-[#767676] text-[16px] font-dms font-medium'>
                      Category 1
                    </a>
                  </li>
                  <li className='py-2'>
                    <a href="#"
                      className='text-[#767676] text-[16px] font-dms font-medium'>
                      Category 1
                    </a>
                  </li>
                  <li className='py-2'>
                    <a href="#"
                      className='text-[#767676] text-[16px] font-dms font-medium'>
                      Category 1
                    </a>
                  </li>
                  <li className='py-2'>
                    <a href="#"
                      className='text-[#767676] text-[16px] font-dms font-medium'>
                      Category 1
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className='pb-12'>
              <div>
                <h4 className='text-[#262626] text-[20px] font-bold font-dms pb-[30px]'>Shop by Color</h4>
              </div>
              <div>
                <ul>
                  <li className='py-2'>
                    <a href="#"
                      className='text-[#767676] text-[16px] font-dms font-medium'>
                      Color 1
                    </a>
                  </li>
                  <li className='py-2'>
                    <a href="#"
                      className='text-[#767676] text-[16px] font-dms font-medium'>
                      Color 2
                    </a>
                  </li>
                  <li className='py-2'>
                    <a href="#"
                      className='text-[#767676] text-[16px] font-dms font-medium'>
                      Color 3
                    </a>
                  </li>
                  <li className='py-2'>
                    <a href="#"
                      className='text-[#767676] text-[16px] font-dms font-medium'>
                      Color 4
                    </a>
                  </li>
                  <li className='py-2'>
                    <a href="#"
                      className='text-[#767676] text-[16px] font-dms font-medium'>
                      Color 5
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className='pb-12'>
              <h4 className='text-[#262626] text-[20px] font-bold font-dms pb-[30px]'>Shop by Brand</h4>
              <div>
                <ul>
                  <li className='py-2'>
                    <a href="#"
                      className='text-[#767676] text-[16px] font-dms font-medium'>
                      Brand 1
                    </a>
                  </li>
                  <li className='py-2'>
                    <a href="#"
                      className='text-[#767676] text-[16px] font-dms font-medium'>
                      Brand 2
                    </a>
                  </li>
                  <li className='py-2'>
                    <a href="#"
                      className='text-[#767676] text-[16px] font-dms font-medium'>
                      Brand 3
                    </a>
                  </li>
                  <li className='py-2'>
                    <a href="#"
                      className='text-[#767676] text-[16px] font-dms font-medium'>
                      Brand 4
                    </a>
                  </li>
                  <li className='py-2'>
                    <a href="#"
                      className='text-[#767676] text-[16px] font-dms font-medium'>
                      Brand 5
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className='pb-12'>
              <h4 className='text-[#262626] text-[20px] font-bold font-dms pb-[30px]'>Shop by Price</h4>
              <div>
                <ul>
                  <li className='py-2'>
                    <a href="#"
                      className='text-[#767676] text-[16px] font-dms font-medium'>
                      $0.00 - $9.99
                    </a>
                  </li>
                  <li className='py-2'>
                    <a href="#"
                      className='text-[#767676] text-[16px] font-dms font-medium'>
                      $10.00 - $19.99
                    </a>
                  </li>
                  <li className='py-2'>
                    <a href="#"
                      className='text-[#767676] text-[16px] font-dms font-medium'>
                      $20.00 - $29.99
                    </a>
                  </li>
                  <li className='py-2'>
                    <a href="#"
                      className='text-[#767676] text-[16px] font-dms font-medium'>
                      $30.00 - $39.99
                    </a>
                  </li>
                  <li className='py-2'>
                    <a href="#"
                      className='text-[#767676] text-[16px] font-dms font-medium'>
                      $40.00 - $69.99
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className='w-full md:w-3/4'>
            <div className='flex items-center pb-[60px]'>
              <div className='hidden md:block w-2/5'>
                <div className='flex gap-6'>
                  <HiViewGrid className='text-white bg-black p-1 text-xl cursor-pointer' />
                  <FaList className='cursor-pointer' />
                </div>
              </div>
              <div className='hidden md:block w-2/5'>
                <div className='flex items-center'>
                  <h6 className='pr-2'>Sort by:</h6>
                  <div className=''>
                    <input type="search" 
                      className='h-[30px] w-[150px] lg:w-[200px] border-1 border-[#00000036] outline-0 p-2 rounded-[3px]'
                      placeholder='Search'/>
                  </div>
                </div>
              </div>
              <div className='hidden md:block w-1/5'>
                <div className='flex items-center'>
                  <h6 className='pr-2'>Show:</h6>
                  <div className=''>
                    <input type="number" 
                      className='h-[30px] w-full lg:w-full border-1 border-[#00000036] outline-0 p-2 rounded-[3px]'
                      placeholder='00'/>
                  </div>
                </div>
              </div>
            </div>
            <div className='grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4'>
              {data.map((item)=>(
                <div className='h-[250px] sm:h-[400px] md:h-[300px] lg:h-[360px] w-full hover:shadow-2xl bg-gray-100'>
                  <a href="/about">
                    <img src={item.thumbnail} alt="" />
                    <h1 className='font-dms font-bold text-[14px] md:text-[18px] sm:pl-4 pb-2'>{item.title}</h1>
                    <h4 className='text-red-600 pb-2 sm:pl-4 md:pl-4'>Price: {item.price}$</h4>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
    </>
  )
}

export default Products