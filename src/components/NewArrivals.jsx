import React, { useContext, } from 'react'
import Container from './Container'
import Slider from 'react-slick';
import { MdArrowBackIosNew, MdArrowForwardIos, MdAutorenew } from 'react-icons/md';
import { ApiData } from './ContextApi';
import { Link } from 'react-router-dom';
import { FaCartPlus, FaHeart } from 'react-icons/fa';

const NewArrivals = () => {
  let data = useContext(ApiData)

  function SampleNextArrow(props) {
      const { onClick } = props;
      return (
        <div
          className="absolute top-[50%] right-0 translate-y-[-50%] z-[9] bg-black text-white p-2 rounded-full text-sm md:text-md lg:text-2xl cursor-pointer"
          onClick={onClick}>
            <MdArrowForwardIos />
        </div>
      );
    }
  
    function SamplePrevArrow(props) {
      const { onClick } = props;
      return (
        <div
          className="absolute top-[50%] left-0 translate-y-[-50%] z-[9] bg-black text-white p-2 rounded-full text-sm md:text-md lg:text-2xl cursor-pointer"
          onClick={onClick}>
            <MdArrowBackIosNew />
        </div>
      );
    }
    var settings = {
      infinite: true,
      speed: 500,
      arrows: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
    };
  return (
    <section className='py-[10px] md:py-[10px] lg:py-[50px]'>
      <Container>
        <div>
          <h2 className='text-[#262626] text-[25px] md:text-[39px] font-bold font-dms pb-[20px] md:pb-[30px] lg:pb-[48px]'>New Arrivals</h2>
        </div>
         <Slider {...settings}>
          {data.map((item)=>(
            <div className='px-2 py-6'>
                <div className='w-full min-h-[230px] sm:min-h-[300px] md:min-h-[370px] shadow-xl bg-gray-200 rounded-[5px]'>
                  <div className='bg-[#ffffff] py-3 rounded-t-[5px] border-1 border-gray-200 relative group'>
                   <Link to={"/shop"} target='_top' className='flex justify-center'>
                    <img src={item.thumbnail} alt="" className='w-full' />
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
                  <h1 className='font-dms font-bold text-[10px] sm:text-[12px] md:text-[14px] lg:text-[18px] px-2 sm:px-4 pb-8 pt-3'>{item.title}</h1>
                </div>
            </div>
          ))}
        </Slider>
      </Container>
    </section>
  )
}

export default NewArrivals