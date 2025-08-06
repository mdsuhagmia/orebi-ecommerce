import React from 'react';
import Container from '../components/Container';
import { NavLink, Outlet } from 'react-router-dom';
import { IoIosArrowForward } from 'react-icons/io';

const MyAccount = () => {
  return (
    <section>
      <Container>
        <div className='py-12'>
          <h1 className='text-[#262626] text-[39px] md:text-[49px] font-bold font-dms pb-[2px]'>My Account</h1>
          <ul className='flex'>
            <li>
              <NavLink to={"/"} className={({ isActive }) => `text-[14px] font-dms font-bold ${isActive ? "text-[#262626]" : "text-[#767676]"}`}>
                Home
              </NavLink>
            </li>
            <IoIosArrowForward className='mt-2' />
            <li className='mt-[2px]'>
              <NavLink to={"/myaccount"} className={({ isActive }) => `text-[14px] font-dms font-bold ${isActive ? "text-[#262626]" : "text-[#767676]"}`}>
                My Account
              </NavLink>
            </li>
          </ul>
        </div>
        <div className='flex pb-12'>
          <div className='w-1/5 sticky top-24'>
            <ul>
              <li className='pb-[20px]'>
                <NavLink to="dashboard" className={({ isActive }) => `text-[14px] font-dms font-bold ${isActive ? "text-[#262626]" : "text-[#767676]"}`}>
                  Dashboard
                </NavLink>
              </li>
              <li className='pb-[20px]'>
                <NavLink to="others" className={({ isActive }) => `text-[14px] font-dms font-bold ${isActive ? "text-[#262626]" : "text-[#767676]"}`}>
                  Others
                </NavLink>
              </li>
              <li className='pb-[20px]'>
                <NavLink to="downloads" className={({ isActive }) => `text-[14px] font-dms font-bold ${isActive ? "text-[#262626]" : "text-[#767676]"}`}>
                  Downloads
                </NavLink>
              </li>
              <li className='pb-[20px]'>
                <NavLink to="addresses" className={({ isActive }) => `text-[14px] font-dms font-bold ${isActive ? "text-[#262626]" : "text-[#767676]"}`}>
                  Addresses
                </NavLink>
              </li>
              <li className='pb-[20px]'>
                <NavLink to="accountdetails" className={({ isActive }) => `text-[14px] font-dms font-bold ${isActive ? "text-[#262626]" : "text-[#767676]"}`}>
                  Account details
                </NavLink>
              </li>
              <li className='pb-[20px]'>
                <NavLink to="logout" className={({ isActive }) => `text-[14px] font-dms font-bold ${isActive ? "text-[#262626]" : "text-[#767676]"}`}>
                  Logout
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Content Area */}
          <div className='w-4/5'>
            <Outlet />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default MyAccount;