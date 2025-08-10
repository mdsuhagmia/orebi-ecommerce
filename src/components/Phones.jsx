import React from 'react'
import Container from './Container'
import phones from '../assets/phones.png'

const Phones = () => {
  return (
    <section className='py-10'>
      <Container>
        <div>
          <img src={phones} alt="" className='w-full' />
        </div>
      </Container>
    </section>
  )
}

export default Phones