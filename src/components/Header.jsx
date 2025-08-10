import { IoCloseOutline, IoSearch } from "react-icons/io5";
import Container from "./Container";
import { FaEquals, FaUser } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { useEffect, useRef, useState } from "react";
import { BiSolidCategory } from "react-icons/bi";


const Header = () => {
  let [cart, setCart] = useState(false)
  let [account, setAccount] = useState(false)
  let cartRef = useRef()
  let accountRef = useRef()
  useEffect(()=>{
    document.addEventListener("click", (e)=>{
      if(accountRef.current.contains(e.target)){
        setAccount(!account)
      }else{
        setAccount(false)
      }if(cartRef.current.contains(e.target)){
        setCart(!cart)
      }else{
        setCart(false)
      }
    })
  }, [cart, account])
  return (
    <header className="bg-[#F5F5F3] py-4">
      <Container>
       <div className="flex justify-between items-center">

        <div className="relative w-1/6 md:w-1/4 flex gap-x-2 cursor-pointer group">
          <FaEquals className="text-xl cursor-pointer" />
          <p className="hidden md:block text-[#262626] text-[16px] font-dms font-medium">Shop by Category</p>

          <div className="bg-[#262626] py-3 w-[263px] absolute left-0 top-[48px] invisible group-hover:visible opacity-0 group-hover:opacity-100 duration-500 ease-in-out transition-all">
            <ul>
              <li className="py-1 cursor-pointer text-[rgba(255,255,255,0.7)] text-[14px] font-dms font-bold pl-3 hover:text-white hover:pl-6 duration-500 ease-in-out">
                <a href="#">Accesories</a>
              </li>
              <li className="py-1 cursor-pointer text-[rgba(255,255,255,0.7)] text-[14px] font-dms font-bold pl-3 hover:text-white hover:pl-6 duration-500 ease-in-out">
                <a href="#">Furniture</a>
              </li>
              <li className="py-1 cursor-pointer text-[rgba(255,255,255,0.7)] text-[14px] font-dms font-bold pl-3 hover:text-white hover:pl-6 duration-500 ease-in-out">
                <a href="#">Electronics</a>
              </li>
              <li className="py-1 cursor-pointer text-[rgba(255,255,255,0.7)] text-[14px] font-dms font-bold pl-3 hover:text-white hover:pl-6 duration-500 ease-in-out">
                <a href="#">Clothes</a>
              </li>
              <li className="py-1 cursor-pointer text-[rgba(255,255,255,0.7)] text-[14px] font-dms font-bold pl-3 hover:text-white hover:pl-6 duration-500 ease-in-out">
                <a href="#">Bags</a>
              </li>
            </ul>
          </div>
          
        </div>

        <div className="w-3/6 md:w-2/4">
          <div className="w-full">
            <div className="relative">
              <input
                type="search"
                placeholder="Search Products"
                className="w-full bg-white py-2 pl-4 pr-10 rounded placeholder:text-[12px] md:placeholder:text-sm border-0 border-white focus:outline-1 focus:outline-amber-200"
              />
              <span className="absolute right-3 top-3 text-gray-500 cursor-pointer"><IoSearch /></span>
            </div>
          </div>
        </div>

        <div className="relative w-2/6 md:w-1/4 flex justify-end gap-x-4">
          <div className="flex" >
            <div ref={accountRef} className="flex">
              <FaUser className="cursor-pointer"  />
            {account == true ? <IoMdArrowDropdown  /> : <IoMdArrowDropup />}
            </div>
            {account &&
            <div className="absolute top-[32px] md:top-[42px] lg:top-[52px] right-[30px] md:right-[30px] lg:right-[35px]">
              <div className="shadow-2xl">
                <div className="mb-[-7px] md:mb-[8px] lg:mb-[19px]">
                  <a className="bg-[#2B2B2B] text-white text-[8px] md:text-[12px] lg:text-[14px] font-bold font-dms px-[8px] py-[4px] md:px-[30px] md:py-[10px] lg:px-[40px] lg:py-[14px] hover:bg-white hover:text-[#2b2b2b]" href="/myaccount">My Account</a>
                </div>
                <div>
                  <a className="bg-[#2b2b2b] text-[#fff] hover:bg-white hover:text-[#2b2b2b] text-[8px] md:text-[12px] lg:text-[14px] font-bold font-dms px-[15.5px] py-[4px] md:px-[41px] md:py-[10px] lg:px-[52.5px] lg:py-[14px]" href="/">Log Out</a>
                </div>
              </div>
             </div>
             }
          </div>
          <div className="relative">
            <div className="" ref={cartRef}>
              <FaShoppingCart className="cursor-pointer" />
            </div>
            {cart &&
            <div className="absolute top-[43px] right-0 bg-white shadow-2xl w-[200px] lg:w-[360px]">
              <div className="bg-[#F5F5F3] w-full flex gap-x-4 lg:gap-x-6">
                <div className="w-[40px] lg:w-[80px] h-[40px] lg:h-[80px] bg-[#D8D8D8] ml-2 lg:ml-4 my-2 lg:my-4"></div>
                <div className="mt-2 lg:mt-4">
                  <h4 className="text-[#262626] text-[8px] lg:text-[14px] font-bold font-dms pb-[6px] lg:pb-[12px]">Black Smart Watch</h4>
                  <h5 className="text-[#262626] text-[8px] lg:text-[14px] font-bold font-dms">$44.00</h5>
                </div>
                <div className="flex mx-auto items-center">
                  <IoCloseOutline 
                  className="cursor-pointer text-xl lg:text-2xl" />
                </div>
              </div>
              <div className="pl-2 lg:pl-4">
                <h4 className="text-[#262626] text-[14px] font-bold font-dms py-2 lg:py-4">Subtotal: $44.00</h4>
                <div className="flex gap-2 lg:gap-4">
                  <div className="pb-4 lg:pb-8 pt-2 lg:pt-4">
                    <a className="border-2 py-[4px] lg:py-[13px] px-[10px] lg:px-[43px] hover:bg-[#262626] hover:text-white duration-300 ease-in-out text-[#262626] text-[14px] lg:text-[14px] font-bold font-dms hover:border-2 hover:border-[#262626]" href="/cart">View Cart</a>
                  </div>
                  <div className="pt-2 lg:pt-4">
                    <a className="border-2 py-[4px] lg:py-[13px] px-[10px] lg:px-[43px] hover:bg-[#262626] hover:text-white duration-300 ease-in-out text-[#262626] text-[14px] lg:text-[14px] font-bold font-dms hover:border-2 hover:border-[#262626]" href="/checkout">Checkout</a>
                  </div>
                </div>
              </div>
            </div>
            }
          </div>
        </div>

      </div>
      </Container>
    </header>
  );
};

export default Header;