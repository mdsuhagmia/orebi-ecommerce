import React from 'react'
import Container from './Container'
import bandown1 from '../assets/bandown1.png'
import bandown2 from '../assets/bandown2.png'
import bandown3 from '../assets/bandown3.png'

const BanDown = () => {
  return (
    <section className='py-[30px] md:py-[60px] lg:py-[100px]'>
      <Container>
        <div className='flex gap-x-2 md:gap-x-4 lg:gap-x-6'>
          <div className='w-1/2'>
            <div>
              <a href="#"><img src={bandown1} alt="" className='w-full rounded-[8px]' /></a>
            </div>
          </div>
          <div className='w-1/2'>
            <div className='pb-[4%]'>
              <a href="#"><img src={bandown2} alt="" className='w-full h-[48%] rounded-[8px]' /></a>
            </div>
            <div>
              <a href="#"><img src={bandown3} alt="" className='w-full h-[48%] rounded-[8px]' /></a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default BanDown