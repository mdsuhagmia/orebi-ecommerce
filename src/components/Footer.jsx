import React from 'react'
import Container from './Container'
import logo from '../assets/logo.png'
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className='bg-[#F5F5F3]'>
      <Container>
        <div className='flex justify-between pt-[55px]'>
          <div className='w-2/12'>
            <h4 className='text-[#262626] text-[12px] md:text-[16px] lg:text-[16px] font-bold font-dms pb-[8px] md:pb-[17px]'>MENU</h4>
            <ul>
              <li className='pb-[2px] md:pb-[6px]'>
                <a href="/"
                  className="text-[#6D6D6D] text-[10px] md:text-[14px] font-dms font-normal">
                    Home
                </a>
              </li>
              <li className='pb-[2px] md:pb-[6px]'>
                <a href="shop"
                  className="text-[#6D6D6D] text-[10px] md:text-[14px] font-dms font-normal">
                  Shop
                </a>
              </li>
              <li className='pb-[2px] md:pb-[6px]'>
                <a href="/about"
                  className="text-[#6D6D6D] text-[10px] md:text-[14px] font-dms font-normal">
                  About
                </a>
              </li>
              <li className='pb-[2px] md:pb-[6px]'>
                <a href="/contacts"
                  className="text-[#6D6D6D] text-[10px] md:text-[14px] font-dms font-normal">
                  Contacts
                </a>
              </li>
              <li>
                <a href="/journal"
                  className="text-[#6D6D6D] text-[10px] md:text-[14px] font-dms font-normal">
                  Journal
                </a>
              </li>
              <li className='flex gap-2 pt-[25px] md:pt-[45px] pb-[30px] md:pb-[60px]'>
                <a href="#"><FaFacebookF /></a>
                <a href="#"><FaLinkedinIn /></a>
                <a href="#"><FaInstagram /></a>
              </li>
            </ul>
          </div>
          <div className='w-2/12'>
            <h4 className='text-[#262626] text-[12px] md:text-[16px] lg:text-[16px] font-bold font-dms pb-[8px] md:pb-[17px]'>SHOP</h4>
            <ul>
              <li>
                <a href="#" 
                className='text-[#6D6D6D] text-[10px] md:text-[14px] font-normal font-dms pb-[2px] md:pb-[6px]'>
                  Category 1
                </a>
              </li>
              <li>
                <a href="#" 
                className='text-[#6D6D6D] text-[10px] md:text-[14px] font-normal font-dms pb-[2px] md:pb-[6px]'>
                  Category 2
                </a>
              </li>
              <li>
                <a href="#" 
                className='text-[#6D6D6D] text-[10px] md:text-[14px] font-normal font-dms pb-[2px] md:pb-[6px]'>
                  Category 3
                </a>
              </li>
              <li>
                <a href="#" 
                className='text-[#6D6D6D] text-[10px] md:text-[14px] font-normal font-dms pb-[2px] md:pb-[6px]'>
                  Category 4
                </a>
              </li>
              <li>
                <a href="#" 
                className='text-[#6D6D6D] text-[10px] md:text-[14px] font-normal font-dms pb-[2px] md:pb-[6px]'>
                  Category 5
                </a>
              </li>
              <li>
                <a href="#" 
                className='text-[#6D6D6D] text-[10px] md:text-[14px] font-normal font-dms pb-[2px] md:pb-[6px]'>
                  Category 6
                </a>
              </li>
            </ul>
          </div>
          <div className='w-5/12 ms-auto  md:w-2/12'>
            <h4 className='text-[#262626] text-[12px] md:text-[16px] lg:text-[16px] font-bold font-dms pb-[8px] md:pb-[17px]'>HELP</h4>
            <ul>
              <li>
                <a href="#" 
                className='text-[#6D6D6D] text-[10px] md:text-[14px] font-normal font-dms pb-[2px] md:pb-[6px]'>
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" 
                className='text-[#6D6D6D] text-[10px] md:text-[14px] font-normal font-dms pb-[2px] md:pb-[6px]'>
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" 
                className='text-[#6D6D6D] text-[10px] md:text-[14px] font-normal font-dms pb-[2px] md:pb-[6px]'>
                  Special E-shop
                </a>
              </li>
              <li>
                <a href="#" 
                className='text-[#6D6D6D] text-[10px] md:text-[14px] font-normal font-dms pb-[2px] md:pb-[6px]'>
                  Shipping
                </a>
              </li>
              <li>
                <a href="#" 
                className='text-[#6D6D6D] text-[10px] md:text-[14px] font-normal font-dms pb-[2px] md:pb-[6px]'>
                  Secure Payments
                </a>
              </li>
            </ul>
          </div>
          <div className='hidden md:block w-3/12'>
            <h4 className='text-[#262626] text-[12px] md:text-[16px] lg:text-[16px] font-bold font-dms pb-[8px] md:pb-[17px]'>(052) 611-5711</h4>
            <h4 className='text-[#262626] text-[10px] md:text-[12px] lg:text-[16px] font-bold font-dms pb-[17px]'>company@domain.com</h4>
          </div>
          <div className='w-2/12 md:w-3/12'>
            <a href="#">
              <img src={logo} alt="" />
            </a>
            <p className='hidden md:block pt-[211px] text-[8px] md:text-[10px] lg:text-[14px] text-[#6D6D6D] font-normal font-dms pb-[52px]'>2020 Orebi Minimal eCommerce Figma Template by Adveits</p>
          </div>
        </div>
         <div className='block md:hidden'>
            <p className='pt-[0px] text-[10px] lg:text-[14px] text-[#6D6D6D] font-normal font-dms pb-[20px]'>2020 Orebi Minimal eCommerce Figma Template by Adveits</p>
          </div>
      </Container>
    </footer>
  )
}

export default Footer