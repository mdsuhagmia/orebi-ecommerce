import React, { useContext, } from 'react'
import Container from './Container'
import Slider from 'react-slick';
import { MdArrowBackIosNew, MdArrowForwardIos } from 'react-icons/md';
import { ApiData } from './ContextApi';

const OldArrivals = () => {
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
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 640,
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
          <h2 className='text-[#262626] text-[25px] md:text-[39px] font-bold font-dms pb-[20px] md:pb-[30px] lg:pb-[48px]'>Old Arrivals</h2>
        </div>
         <Slider {...settings}>
          {data.map((item)=>(
            <div className='px-2'>
              <a href="/shop">
              <img src={item.thumbnail} alt="" className='px-4 bg-white' />
              <h1 className='font-dms font-bold text-[18px]'>{item.title}</h1>
              <p className='text-red-600'>price: {item.price}$</p>
             </a>
            </div>
          ))}
        </Slider>
      </Container>
    </section>
  )
}

export default OldArrivals