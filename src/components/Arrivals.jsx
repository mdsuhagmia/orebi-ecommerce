import React from 'react'
import Container from './Container'
import arrivals1 from '../assets/arrivals1.png'
import arrivals2 from '../assets/arrivals2.png'
import arrivals3 from '../assets/arrivals3.png'
import arrivals4 from '../assets/arrivals4.png'
import arrivals5 from '../assets/arrivals5.png'
import arrivals6 from '../assets/arrivals6.png'
import arrivals7 from '../assets/arrivals7.png'
import arrivals8 from '../assets/arrivals8.png'
import arrivalsdown from '../assets/arrivalsdown.png'
import Slider from 'react-slick';
import { MdArrowBackIosNew, MdArrowForwardIos } from 'react-icons/md'

const Arrivals = () => {
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
          <h2 className='text-[#262626] text-[25px] md:text-[39px] font-bold font-dms pb-[20px] md:pb-[30px] lg:pb-[48px]'>New Arrivals</h2>
        </div>
        <Slider {...settings}>
          <div className='px-1'>
            <a href="#">
              <img src={arrivals1} alt="" />
            </a>
          </div>
          <div className='px-1'>
            <a href="#">
              <img src={arrivals2} alt="" />
            </a>
          </div>
          <div className='px-1'>
            <a href="#">
              <img src={arrivals3} alt="" />
            </a>
          </div>
          <div className='px-1'>
            <a href="#">
              <img src={arrivals4} alt="" />
            </a>
          </div>
          <div className='px-1'>
            <a href="#">
              <img src={arrivals5} alt="" />
            </a>
          </div>
          <div className='px-1'>
            <a href="#">
              <img src={arrivals6} alt="" />
            </a>
          </div>
          <div className='px-1'>
            <a href="#">
              <img src={arrivals7} alt="" />
            </a>
          </div>
          <div className='px-1'>
            <a href="#">
              <img src={arrivals8} alt="" />
            </a>
          </div>
        </Slider>
        <div className='pt-[30px] md:pt-[60px] lg:pt-[130px] pb-[40px]'>
          <a href="#">
            <img src={arrivalsdown} alt="" className='w-full'/>
          </a>
        </div>
      </Container>
    </section>
  )
}

export default Arrivals