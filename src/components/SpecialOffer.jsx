import React from 'react'
import Container from './Container'
import specialoffer1 from '../assets/specialoffer1.png'
import specialoffer2 from '../assets/specialoffer2.png'
import specialoffer3 from '../assets/specialoffer3.png'
import specialoffer4 from '../assets/specialoffer4.png'

const SpecialOffer = () => {
  return (
    <section className='pb-8 md:pb-12 lg:pb-16 pt-4 md:pt-6 lg:pt-8'>
      <Container>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
          <div>
            <a href="#">
              <img src={specialoffer1} alt="" />
            </a>
          </div>
          <div>
            <a href="#">
              <img src={specialoffer2} alt="" />
            </a>
          </div>
          <div className='pt-4 md:pt-0'>
            <a href="#">
              <img src={specialoffer3} alt="" />
            </a>
          </div>
          <div className='pt-4 md:pt-0'>
            <a href="#">
              <img src={specialoffer4} alt="" />
            </a>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default SpecialOffer