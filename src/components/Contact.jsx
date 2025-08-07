import React from 'react'
import Container from './Container'
import { NavLink } from 'react-router-dom'
import { IoIosArrowForward } from 'react-icons/io'

const Contact = () => {
  return (
    <section className='py-12'>
      <Container>
        <div className='pb-10 md:pb-16'>
          <h1 className='text-[#262626] text-[39px] md:text-[49px] font-bold font-dms pb-[2px]'>Contacts</h1>
          <ul className='flex'>
            <li>
              <NavLink to={"/"}
                className={({ isActive }) => `text-[14px] font-dms font-bold ${isActive ? "text-[#262626]" : "text-[#767676]"}`}>
                Home
              </NavLink>
            </li>
            <IoIosArrowForward className='mt-2' />
            <li className='mt-[2px]'>
              <NavLink to={"/contacts"}
                className={({ isActive }) => `text-[14px] font-dms font-bold ${isActive ? "text-[#262626]" : "text-[#767676]"}`}>
                Contacts
              </NavLink>
            </li>
          </ul>
        </div>
        <div className='w-full md:w-2/3 lg:w-1/3'>
          <h2 className='text-[#262626] text-[39px] md:text-[49px] font-bold font-dms pb-[2px]'>Fill up a Form</h2>
          <form action="">
            <div className='pb-[23px]'>
              <label 
                className='block text-[#262626] text-[18px] md:text-[16px] font-bold font-dms pb-[8px]'>
                  Name
              </label>
              <input type="text" 
                placeholder='Your name here'
                className='px-4 py-2 border-2 border-[#00000018] rounded-sm outline-0 w-full' />
            </div>
            <div className='pb-[23px]'>
              <label
                className='block text-[#262626] text-[18px] md:text-[16px] font-bold font-dms pb-[8px]'>
                  Email
              </label>
              <input type="email" 
                placeholder='Your email here'
                className='px-4 py-2 border-2 border-[#00000018] rounded-sm outline-0 w-full' />
            </div>
            <div className='pb-[23px]'>
              <label 
                className='block text-[#262626] text-[18px] md:text-[16px] font-bold font-dms pb-[8px]'>
                  Message
              </label>
              <textarea name="" id=""
                className='w-full px-4 py-2 border-2 border-[#00000018] rounded-sm outline-0'
                placeholder='Message'>
              </textarea>
            </div>
            <div className='pb-[23px] flex gap-4'>
              <button type='reset'
                className='text-[18px] md:text-[16px] font-bold font-dms px-6 py-2 bg-gray-500 text-white rounded-md cursor-pointer hover:bg-gray-600'>
                  Reset
              </button>
              <button type='submit'
                className='text-[18px] md:text-[16px] font-bold font-dms px-20 py-2 bg-[#262626] text-white rounded-md cursor-pointer hover:bg-[#6e6d6d]'>
                  Post
              </button>
            </div>
          </form>
        </div>
        <div className='py-6 md:py-12 h-[250px] md:h-[450px]'>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d41320.69892572178!2d90.36015968963841!3d23.737809925682058!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b33cffc3fb%3A0x4a826f475fd312af!2z4Kan4Ka-4Kao4Kau4Kao4KeN4Kah4Ka_LCDgpqLgpr7gppXgpr4gMTIwNQ!5e0!3m2!1sbn!2sbd!4v1754302833640!5m2!1sbn!2sbd" width="100%" height="100%"></iframe>
        </div>
      </Container>
    </section>
  )
}

export default Contact