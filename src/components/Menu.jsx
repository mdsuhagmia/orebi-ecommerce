import React, { useState } from 'react'
import Container from './Container'
import logo from '../assets/logo.png'
import { NavLink } from 'react-router-dom'
import { IoCloseSharp, IoMenu } from 'react-icons/io5'

const Menu = () => {
  let [openMenu, setOpenMenu] = useState(false)
  return (
    <>
    <nav className='bg-[#fff] py-4'>
      <Container>
        <div className='flex items-center'>
          <div>
            <a href="#">
              <img src={logo} alt="" />
            </a>
          </div>
          <div className="mx-auto">
            <ul className={`md:flex gap-x-[20px] md:static duration-500 ease-in-out pl-4 md:pl-0 ${openMenu == true ? "absolute top-[56px] left-0 bg-white w-full z-[99999] shadow-2xl md:shadow-none border-t-1 md:border-t-0 border-[#00000058]" : "absolute top-[56px] left-[-770px] w-full bg-white" }`}>
              <li className='pb-[2px] md:pb-0 pt-2 md:pt-0'>
                <NavLink to={"/"} 
                  className={({isActive}) => `text-[14px] font-dms font-bold ${isActive ? "text-[#262626]" : "text-[#767676]"}`}
                  onClick={()=>setOpenMenu(false)}>
                    Home
                </NavLink>
              </li>
              <li className='pb-[2px] md:pb-0'>
                <NavLink to={"/shop"} 
                  className={({isActive}) => `text-[14px] font-dms font-bold ${isActive ? "text-[#262626]" : "text-[#767676]"}`}
                  onClick={()=>setOpenMenu(false)}>
                    Shop
                </NavLink>
              </li>
              <li className='pb-[2px] md:pb-0'>
                <NavLink to={"/About"} 
                  className={({isActive}) => `text-[14px] font-dms font-bold ${isActive ? "text-[#262626]" : "text-[#767676]"}`}
                  onClick={()=>setOpenMenu(false)}>
                    About
                </NavLink>
              </li>
              <li className='pb-[2px] md:pb-0'>
                <NavLink to={"/contacts"} 
                  className={({isActive}) => `text-[14px] font-dms font-bold ${isActive ? "text-[#262626]" : "text-[#767676]"}`}
                  onClick={()=>setOpenMenu(false)}>
                    Contacts
                </NavLink>
              </li>
              <li className='pb-3 md:pb-0'>
                <NavLink to={"/journal"} 
                  className={({isActive}) => `text-[14px] font-dms font-bold ${isActive ? "text-[#262626]" : "text-[#767676]"}`}
                  onClick={()=>setOpenMenu(false)}>
                    Journal
                </NavLink>
              </li>
            </ul>
          </div>
          <div className='md:hidden' onClick={()=>setOpenMenu(!openMenu)}>
            {openMenu == true ? <IoCloseSharp className='text-2xl cursor-pointer' /> : <IoMenu className='text-2xl cursor-pointer' /> }
          </div>
          <div>
            <ul className='flex gap-4'>
              <li className='pb-3 md:pb-0'>
                <NavLink to={"/login"}
                  className={({isActive}) => `text-[14px] font-dms font-bold ${isActive ? "text-[#262626]" : "text-[#767676]"}`}
                  onClick={()=>setOpenMenu(false)}>
                    Login
                </NavLink>
              </li>
              <li className='pb-3 md:pb-0'>
                <NavLink to={"/signup"} 
                  className={({isActive}) => `text-[14px] font-dms font-bold ${isActive ? "text-[#262626]" : "text-[#767676]"}`}
                  onClick={()=>setOpenMenu(false)}>
                    Sign Up
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </nav>
    </>
  )
}

export default Menu