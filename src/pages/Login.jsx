import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { IoIosArrowForward } from 'react-icons/io'
import Container from '../components/Container'

const Login = () => {
  return (
    <section className='py-12'>
      <Container>
        <div className=''>
          <h1 className='text-[#262626] text-[39px] md:text-[49px] font-bold font-dms pb-[2px]'>Login</h1>
          <ul className='flex'>
            <li>
              <NavLink to={"/"}
                className={({ isActive }) => `text-[14px] font-dms font-bold ${isActive ? "text-[#262626]" : "text-[#767676]"}`}>
                Home
              </NavLink>
            </li>
            <IoIosArrowForward className='mt-2' />
            <li className='mt-[2px]'>
              <NavLink to={"/login"}
                className={({ isActive }) => `text-[14px] font-dms font-bold ${isActive ? "text-[#262626]" : "text-[#262626]"}`}>
                Login
              </NavLink>
            </li>
          </ul>
        </div>
        <div className='w-full lg:w-1/2'>
          <p className='text-[#767676] text-[16px] font-medium font-dms py-[80px] leading-[30px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.</p>
          <h2 className='text-[#262626] text-[39px] md:text-[49px] font-bold font-dms pb-[42px]'>Returning Customer</h2>
          <form action="">
            <div className='md:flex justify-between'>
              <div className='pb-[30px] w-[48%]'>
                <label
                  className='block text-[#262626] text-[18px] md:text-[16px] font-bold font-dms pb-[8px]'>
                  Email
                </label>
                <input type="email"
                  placeholder='company@domain.com'
                  required autoComplete='email'
                  className='px-4 py-2 border-2 border-[#00000018] rounded-sm outline-0 w-full focus:border-blue-500' />
              </div>
              <div className='pb-[30px] w-[48%]'>
                <label
                  className='block text-[#262626] text-[18px] md:text-[16px] font-bold font-dms pb-[8px]'>
                  Password
                </label>
                <input type="password"
                  placeholder='**********'
                  required autoComplete='current-password'
                  className='px-4 py-2 border-2 border-[#00000018] rounded-sm outline-0 w-full focus:border-blue-500' />
              </div>
            </div>
            <div className='pb-[80px]'>
              <button type='submit'
              className='text-[18px] md:text-[16px] font-bold font-dms px-20 py-2 bg-[#262626] text-white rounded-md cursor-pointer hover:bg-[#6e6d6d]'>
              Login
            </button>
            </div>
          </form>
        </div>
        <div className='w-full md:w-1/2'>
          <h2 className='text-[#262626] text-[39px] md:text-[49px] font-bold font-dms pb-[42px]'>New Customer</h2>
          <p className='text-[#767676] text-[16px] font-medium font-dms py-[30px] leading-[30px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.</p>
          <div className='pb-[80px] pt-4'>
            <a href='/signup'
              className='text-[18px] md:text-[16px] font-bold font-dms px-20 py-4 bg-[#262626] text-white rounded-md cursor-pointer hover:bg-[#000000b6]'>
              Continue
            </a>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Login