import React from 'react'
import { NavLink } from 'react-router-dom'
import Container from '../components/Container'
import { IoIosArrowForward } from 'react-icons/io'
import ProductsDetails from '../components/ProductsDetails'

const About = () => {
  return (
    <section className='py-12'>
      <Container>
        <div className='pb-10 md:pb-16'>
          <h1 className='text-[#262626] text-[39px] md:text-[49px] font-bold font-dms pb-[2px]'>About</h1>
          <ul className='flex'>
            <li>
              <NavLink to={"/"}
                className={({ isActive }) => `text-[14px] font-dms font-bold ${isActive ? "text-[#262626]" : "text-[#767676]"}`}>
                Home
              </NavLink>
            </li>
            <IoIosArrowForward className='mt-2' />
            <li className='mt-[2px]'>
              <NavLink to={"/about"}
                className={({ isActive }) => `text-[14px] font-dms font-bold ${isActive ? "text-[#262626]" : "text-[#767676]"}`}>
                About
              </NavLink>
            </li>
          </ul>
        </div>
      </Container>
    </section>
  )
}

export default About