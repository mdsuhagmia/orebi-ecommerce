import React from 'react'
import Container from '../components/Container'
import { NavLink } from 'react-router-dom'
import { IoIosArrowForward } from 'react-icons/io'

const Journal = () => {
  return (
    <section className='py-12'>
      <Container>
        <div className='pb-0 md:pb-16'>
          <h2 className='text-[#262626] text-[39px] md:text-[49px] font-bold font-dms pb-[2px]'>Journal</h2>
          <ul className='flex'>
            <li>
              <NavLink to={"/"}
                className={({ isActive }) => `text-[14px] font-dms font-bold ${isActive ? "text-[#262626]" : "text-[#767676]"}`}>
                Home
              </NavLink>
            </li>
            <IoIosArrowForward className='mt-2' />
            <li className='mt-[2px]'>
              <NavLink to={"/journal"}
                className={({ isActive }) => `text-[14px] font-dms font-bold ${isActive ? "text-[#262626]" : "text-[#767676]"}`}>
                Journal
              </NavLink>
            </li>
          </ul>
        </div>
      </Container>
    </section>
  )
}

export default Journal