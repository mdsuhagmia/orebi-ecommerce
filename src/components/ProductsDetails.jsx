import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import Container from './Container'
import { CiStar } from 'react-icons/ci'
import { FaMinus, FaPlus, FaShieldAlt, FaShippingFast, FaStar, FaStarHalfAlt } from 'react-icons/fa'

const ProductsDetails = () => {
  let [singleProduct, setSingleProduct] = useState([])
  let productId = useParams()
  let getproductId = ()=>{
    axios.get(`https://dummyjson.com/products/${productId.id}`).then((response)=>{
      setSingleProduct(response.data)
    })
  }
  useEffect(()=>{
    getproductId()
  }, [])

  let clintRating = Array.from({length:5}, (_, index)=>{
    let number = index + 0.5
    return(
      singleProduct.rating > index + 1 ? <FaStar className='text-[gold]' /> : singleProduct.rating > number ? <FaStarHalfAlt className='text-[gold]' /> : <CiStar />
    )
  })

  let [counter, setCounter] = useState(0)
  let handleIncrement = ()=>{
    setCounter(counter + 1)
  }
  let handleDecrement = ()=>{
    if(counter > 0){
      setCounter(counter - 1)
    }
  }

  let [show, setShow] = useState(false)
  let handleDetails = ()=>{
    setShow(!show)
  }

  let [shippingShow, setShippingShow] = useState(false)
  let handleShipping = ()=>{
    setShippingShow(!shippingShow)
  }

  return (
    <section>
      <Container>
        <div className='pb-8'>
          <div className="w-[60%] md:w-[40%] mx-auto my-8 rounded-[5px] shadow-md border-1 border-[#4800ff1d] bg-gray-50">
            <img src={singleProduct.thumbnail} className='w-full py-4' alt="" />
          </div>
          <div className='flex gap-4 items-center pt-6 pb-4 pl-0 lg:pl-16'>
            <div className='flex'>
              {clintRating}
            </div>
            <div className=''>
              <p className='text-[#767676] text-[16px]'>Review</p>
            </div>
          </div>
          <div className='pl-0 lg:pl-16'>
            <p className='text-[#262626] font-bold pb-4'>Price: <span className='text-[#767676] pl-6'>${singleProduct.price}</span></p>
            <p className='text-[#262626] font-bold pb-4'>Stock: <span className='text-[#767676] pl-6'>{singleProduct.stock}</span></p>
            <p className='text-[#262626] font-bold pb-4'>Brand: <span className='text-[#767676] pl-6'>{singleProduct.brand}</span></p>
            <p className='text-[#262626] font-bold pb-4'>Weight: <span className='text-[#767676] pl-6'>{singleProduct.weight}</span></p>
            <p className='text-[#262626] font-bold pb-4'>Status: <span className='text-[#767676] pl-6'>{singleProduct.availabilityStatus}</span></p>
            <div className='flex items-center pb-4'>
              <p className='text-[#262626] font-bold'>QUANTITY:</p>
              <div className='flex items-center gap-8 ml-6 border-1 border-[#00000030] py-1'>
                <FaMinus onClick={handleDecrement} className='cursor-pointer ml-2' />
                <h2>{counter}</h2>
                <FaPlus onClick={handleIncrement} className='cursor-pointer mr-2' />
              </div>
            </div>
            <div className='flex gap-4 md:gap-6 py-8'>
              <div>
                <button className='text-[#262626] text-[14px] font-bold font-dms px-[20px] md:px-[40px] py-[8px] md:py-[16px] border-2 border-[#262626] hover:bg-[#262626] hover:text-white hover:border-2 transition-all duration-300 ease-in-out cursor-pointer rounded-[5px]'>
                  Add to Wish List
                </button>
              </div>
              <div>
                <button className='text-[#262626] text-[14px] font-bold font-dms px-[20px] md:px-[40px] py-[8px] md:py-[16px] border-2 border-[#262626] hover:bg-[#262626] hover:text-white hover:border-2 transition-all duration-300 ease-in-out cursor-pointer rounded-[5px]'>
                  Add to Cart
                </button>
              </div>
            </div>
            <div className='w-full sm:w-2/3 md:w-1/2 lg:w-1/3 py-4'>
              <div >
                <div className='flex items-center justify-between' >
                  <h2 onClick={handleDetails} className='text-[#262626] text-[16px] font-bold font-dms'>FEATURES  & DETAILS</h2>
                  <FaPlus onClick={handleDetails} className='cursor-pointer' />
                </div>
                {show == true ? <p className='text-[#767676] text-[14px] font-dms font-medium py-3 pl-4'>{singleProduct.description}</p> : "" }
              </div>
            </div>
            <div className='w-full sm:w-2/3 md:w-1/2 lg:w-1/3 py-4'>
              <div >
                <div className='flex items-center justify-between' >
                  <h2 onClick={handleShipping} className='text-[#262626] text-[16px] font-bold font-dms'>SHIPPING & RETURNS</h2>
                  <FaPlus onClick={handleShipping} className='cursor-pointer' />
                </div>
                {shippingShow == true ? <div>
                 <div className='flex items-center gap-x-2 pl-4'>
                   <FaShippingFast />
                  <p className='text-[#767676] text-[14px] font-dms font-medium pt-3 pb-2'>{singleProduct.shippingInformation}</p>
                 </div>
                 <div className='flex items-center gap-x-2 pl-4'>
                   <FaShieldAlt />
                  <p className='text-[#767676] text-[14px] font-dms font-medium'>{singleProduct.warrantyInformation}</p>
                 </div>
                 </div>  : "" }
              </div>
            </div>
            <div className='py-12'>
              <div>
                <ul className='flex items-center gap-x-8'>
                  <li className="text-[20px] font-dms font-semibold text-[#767676]">
                      Description
                  </li>
                  <li className="text-[20px] font-dms font-semibold text-[#262626]">
                      Reviews
                  </li>
                </ul>
              </div>
              <div>
                <p className="text-[14px] font-dms font-semibold text-[#767676] py-6">Review for Product</p>
                {singleProduct.reviews?.map((item)=>(
                  <div className='border-y-2 border-[#00000010] mb-8'>
                    <div className='py-6'>
                      <div className='flex gap-x-8 items-center py-2'>
                        <h3 className='text-[16px] font-dms font-semibold text-[#262626]'>{item.reviewerName}</h3>
                        <div className='flex items-center'>
                          <div className="flex items-center text-yellow-500">
                            {Array.from({ length: 5 }, (_, index) => {
                              return item.rating > index + 1 ? <FaStar /> : <CiStar />
                            })}
                          </div>
                        </div>
                      </div>
                      <p>{item.comment}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className='w-full sm:w-2/3 md:w-1/2 lg:w-1/3 py-8'>
                <h2 className="text-[20px] font-dms font-semibold text-[#262626] pb-8">Add a Review</h2>
                <form action="">
                  <div className='pb-4'>
                    <label htmlFor="Name"
                      className='block text-[18px] text-[#262626] font-bold font-dms pb-2'>
                        Name
                    </label>
                    <input type="text"
                      placeholder='Your name here'
                      required autoComplete='name'
                      className='block py-2 px-3 border-2 border-[#0000001e] rounded-[5px] focus-visible:text-indigo-500 focus:outline-2 focus:outline-cyan-500 outline-1   outline-blue-400 w-full placeholder:text-[16px]'
                      />
                  </div>
                  <div className='pb-4'>
                    <label htmlFor="Name"
                      className='block text-[18px] text-[#262626] font-bold font-dms pb-2'>
                        Email
                    </label>
                    <input type="text"
                      placeholder='Your email here'
                      required autoComplete='email'
                      className='block py-2 px-3 border-2 border-[#0000001e] rounded-[5px] focus-visible:text-indigo-500 focus:outline-2 focus:outline-cyan-500 outline-1   outline-blue-400 w-full placeholder:text-[16px]'
                      />
                  </div>
                  <div className='pb-8'>
                    <label htmlFor="Name"
                      className='block text-[18px] text-[#262626] font-bold font-dms pb-2'>
                        Review
                    </label>
                    <textarea name="" id=""
                      placeholder='Your name here'
                      required autoComplete='text'
                      className='block py-2 px-3 border-2 border-[#0000001e] rounded-[5px] focus-visible:text-indigo-500 focus:outline-2 focus:outline-cyan-500 outline-1   outline-blue-400 w-full placeholder:text-[16px]'
                      ></textarea>
                  </div>
                  <div className='pb-8'>
                    <button
                      type='submit'
                      className='text-[16px] text-[#fff] font-bold font-dms py-3 px-20 bg-[#262626] cursor-pointer rounded-[5px]'>
                        Post
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default ProductsDetails