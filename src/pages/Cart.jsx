import React from 'react'
import Container from '../components/Container'
import { Link, NavLink } from 'react-router-dom'
import { IoIosArrowForward } from 'react-icons/io'
import { useDispatch, useSelector } from 'react-redux'
import { IoClose } from 'react-icons/io5'
import { FaMinus, FaPlus } from 'react-icons/fa'
import { decrement, increment, productRemove } from '../components/slice/productSlice'
import { MdDeleteForever } from 'react-icons/md'

const Cart = () => {
  let data = useSelector((state)=>state.product.cartItem)
  let dispatch = useDispatch()

  let {totalPrice, totalQuantity} = data.reduce((acce, item)=>{
    acce.totalPrice += item.price * item.qun
    acce.totalQuantity += item.qun
    return acce;
  },{totalPrice: 0, totalQuantity: 0})
  return (
    <section className='py-16'>
      <Container>
        <div className='pb-10 md:pb-12'>
          <h1 className='text-[#262626] text-[39px] md:text-[49px] font-bold font-dms pb-[2px]'>Cart</h1>
          <ul className='flex items-center'>
            <li>
              <NavLink to={"/"}
                className={({ isActive }) => `text-[14px] font-dms font-bold ${isActive ? "text-[#262626]" : "text-[#767676]"}`}>
                Home
              </NavLink>
            </li>
            <IoIosArrowForward className='mt-2' />
            <li className='mt-[2px]'>
              <NavLink to={"/cart"}
                className={({ isActive }) => `text-[14px] font-dms font-bold ${isActive ? "text-[#262626]" : "text-[#767676]"}`}>
                Cart
              </NavLink>
            </li>
          </ul>
        </div>
        {data.map((item, index) => (
          <div className=''>
            <div className='hidden md:block'>
              <div className='bg-[#F5F5F3] rounded-t-[5px] grid grid-cols-5 pl-4'>
                <div className='col-span-2'>
                  <h2 className='text-[#262626] text-[16px] font-bold font-dms py-3'>Product</h2>
                </div>
                <div>
                  <h2 className='text-[#262626] text-[16px] font-bold font-dms py-3'>Price</h2>
                </div>
                <div>
                  <h2 className='text-[#262626] text-[16px] font-bold font-dms py-3'>Quantity</h2>
                </div>
                <div>
                  <h2 className='text-[#262626] text-[16px] font-bold font-dms py-3'>Total</h2>
                </div>
              </div>
            </div>
            <div className='border-2 border-[#F0F0F0] py-4 pl-4 mb-8'>
              <div className='hidden md:block'>
                <div className='grid grid-cols-5'>
                  <div className='flex items-center gap-x-2 col-span-2'>
                    <div className=''>
                      <IoClose className='text-2xl cursor-pointer hover:text-red-500' onClick={() => dispatch(productRemove(index))} />
                    </div>
                    <div className='h-[140px]'>
                      <img src={item.thumbnail} alt="" className='h-full' />
                    </div>
                    <div className=''>
                      <h2 className='text-[#262626] font-dms font-semibold'>{item.title}</h2>
                    </div>
                  </div>
                  <div className='flex items-center'>
                    <p className='text-[#262626] font-dms font-semibold'>${item.price}</p>
                  </div>
                  <div className='flex items-center gap-x-4'>
                    <button className={`cursor-pointer hover:text-red-600 ${item.qun <= 1 ? "opacity-[0.3]" : "opacity-[1]"}`} onClick={() => dispatch(decrement(index))}>
                      <FaMinus />
                    </button>
                    <p className='text-lg font-bold'>{item.qun}</p>
                    <button className='cursor-pointer hover:text-blue-500' onClick={() => dispatch(increment(index))}>
                      <FaPlus />
                    </button>
                  </div>
                  <div className='flex items-center text-[#262626] font-dms font-semibold'>
                    <p>${(item.price * item.qun).toFixed(2)}</p>
                  </div>
                </div>
              </div>
              <div className='block md:hidden relative'>
                <div className='grid grid-cols-3 max-h-[90px]'>
                  <div className='h-[70px]'>
                    <img src={item.thumbnail} alt="" className='h-full' />
                  </div>
                  <div className='col-span-2'>
                    <h2 className='font-semibold text-[#262626] pb-2'>{item.title}</h2>
                    <div className='flex items-center justify-between pr-2'>
                      <p>${(item.price * item.qun).toFixed(2)}</p>
                      <div className='flex items-center gap-x-2'>
                        <button className={`cursor-pointer hover:text-red-600 ${item.qun <= 1 ? "opacity-[0.3]" : "opacity-[1]"}`} onClick={() => dispatch(decrement(index))}>
                          <FaMinus />
                        </button>
                        <p className='text-lg font-bold'>{item.qun}</p>
                        <button className='cursor-pointer hover:text-blue-500' onClick={() => dispatch(increment(index))}>
                          <FaPlus />
                        </button>
                      </div>
                      <div className=''>
                        <MdDeleteForever className='text-2xl cursor-pointer hover:text-red-500' onClick={() => dispatch(productRemove(index))} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
          {data.length > 0 && (
          <div>
            <h2 className='text-end pb-2 text-[20px] text-[#262626] font-bold font-dms'>Cart totals</h2>
            <div className='max-w-[446px] ms-auto flex items-center justify-between'>
              <div className='w-[50%]'>
                <div>
                  <h4 className='text-[16px] text-[#262626] font-bold font-dms py-2 px-4 border-2 border-[#F0F0F0] border-b-0'>Subtotal:</h4>
                </div>
                <div>
                  <h4 className='text-[16px] text-[#262626] font-bold font-dms py-2 px-4 border-2 border-[#F0F0F0] border-b-0'>Total Quantity:</h4>
                </div>
                <div>
                  <h4 className='text-[16px] text-[#262626] font-bold font-dms py-2 px-4 border-2 border-[#F0F0F0]'>Total:</h4>
                </div>
              </div>
              <div className='w-[50%]'>
                <div>
                  <h4 className='text-[16px] text-[#262626] font-bold font-dms py-2 px-4 border-2 border-[#F0F0F0] border-b-0'>${totalPrice.toFixed(2)}</h4>
                </div>
                <div>
                  <h4 className='text-[16px] text-[#262626] font-bold font-dms py-2 px-4 border-2 border-[#F0F0F0] border-b-0'>{totalQuantity}</h4>
                </div>
                <div>
                  <h4 className='text-[16px] text-[#262626] font-bold font-dms py-2 px-4 border-2 border-[#F0F0F0]'>${totalPrice.toFixed(2)}</h4>
                </div>
              </div>
            </div>
            <div className='text-end pt-6'>
              <Link to={"/checkout"} target='_top' className='text-[14px] text-white font-semibold font-dms bg-[#262626] rounded-[5px] px-8 py-3'>
                Proceed to Checkout
              </Link>
            </div>
          </div>
          )}
          {data.length > 0 ? "" : <div>
            <h2 className='text-3xl text-[#262626] font-bold font-dms text-center pb-6'>There are no items in this cart</h2>
          <div className='text-center'>
            <Link to={"/shop"} className='text-2xl text-[#fff] font-bold font-dms bg-[#262626] py-2 px-12 rounded-[5px] hover:bg-[#262626a8]'>
              Continue Shopping
            </Link>
          </div>
          </div> }
      </Container>
    </section>
  )
}

export default Cart