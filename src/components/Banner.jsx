import React from 'react'
import Container from './Container'
import { CiDeliveryTruck } from 'react-icons/ci'
import { IoReloadOutline } from 'react-icons/io5'
import Slider from 'react-slick'
import bg from '../assets/group.png'

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <>
    <section className="">
      <Slider {...settings} className='ban_bg'>
        <div>
          <a href="/shop">
            <img src={bg} alt="" className='w-full' />
          </a>
        </div>
        <div>
          <a href="/shop">
            <img src={bg} alt="" className='w-full' />
          </a>
        </div>
        <div>
          <a href="/shop">
            <img src={bg} alt="" className='w-full' />
          </a>
        </div>
      </Slider>
    </section>
    <section className='bg-[#fff] py-4'>
      <Container>
        <div className='md:flex justify-between items-center'>
          <div className='flex items-center gap-2 pb-2 md:pb-0'>
            <span className='text-[#000000] text-[16px] font-normal font-dms'>2</span>
            <h6 className='text-[#6D6D6D] text-[16px] font-normal font-dms'>Two years warranty</h6>
          </div>
          <div className='flex items-center gap-2 pb-2 md:pb-0'>
            <span><CiDeliveryTruck /></span>
            <h6 className='text-[#6D6D6D] text-[16px] font-normal font-dms'>Free shipping</h6>
          </div>
          <div className='flex items-center gap-2'>
            <span><IoReloadOutline /></span>
            <h6 className='text-[#6D6D6D] text-[16px] font-normal font-dms'>Return policy in 30 days</h6>
          </div>
        </div>
      </Container>
    </section>
    </>
  )
}

export default Banner