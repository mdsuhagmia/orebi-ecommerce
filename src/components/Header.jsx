import { IoCloseOutline, IoSearch } from "react-icons/io5";
import Container from "./Container";
import { FaEquals, FaUser } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import { useContext, useEffect, useRef, useState } from "react";
import mask from '../assets/mask.png'
import { ApiData } from "./ContextApi";


const Header = () => {
  let [cart, setCart] = useState(false)
  let [account, setAccount] = useState(false)
  let [mobileCategory, setMobileCategory] = useState(false)
  let cartRef = useRef()
  let accountRef = useRef()
  let mobileCategoryRef = useRef()
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
      }if(mobileCategoryRef.current.contains(e.target)){
        setMobileCategory(!mobileCategory)
      }else{
        setMobileCategory(false)
      }
    })
  }, [cart, account, mobileCategory])


  let data = useContext(ApiData)
  let [shopCategory, setShopCategory] = useState([])
  useEffect(()=>{
    setShopCategory([...new Set(data.map((item)=>item.category))])
  }, [data])

  return (
    <header className="bg-[#F5F5F3] py-4 select-none">
      <Container>
       <div className="flex justify-between items-center">

        <div className="relative w-1/6 md:w-1/4 flex gap-x-2 cursor-pointer group">
            <FaEquals  className="hidden md:block text-xl cursor-pointer relative" />
          <div ref={mobileCategoryRef} className="block md:hidden">
            <FaEquals  className="text-xl cursor-pointer relative" />
          </div>
          <p className="hidden md:block text-[#262626] text-[16px] font-dms font-medium">Shop by Category</p>

          {mobileCategory && 
            <div className="absolute top-[46px] left-0 z-[9999]">
              <ul className="bg-[#262626] py-2 rounded-b-[5px]">
                  {shopCategory.map((item) => (
                    <li className="py-1 pr-8 cursor-pointer text-[rgba(255,255,255,0.7)] text-[12px] font-dms font-bold pl-3 hover:text-white  capitalize">
                      {item}
                    </li>
                  ))}
              </ul>
          </div>
          }

          <div className="hidden md:block bg-[#262626] py-3 w-[263px] absolute left-0 top-[48px] invisible group-hover:visible opacity-0 group-hover:opacity-100 duration-500 ease-in-out transition-all rounded-b-[5px] z-[9999]">
            <ul>
              {shopCategory.map((item)=>(
              <li className="py-1 cursor-pointer text-[rgba(255,255,255,0.7)] text-[14px] font-dms font-bold pl-3 hover:text-white hover:pl-6 duration-500 ease-in-out capitalize">
                {item}
              </li>
              ))}
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

        <div className="w-2/6 md:w-1/4 flex justify-end gap-x-4">
          <div className="flex" >
            <div ref={accountRef} className="relative">
              <FaUser className="cursor-pointer"  />
                {account &&
                  <div className="absolute top-[44px] right-0 z-[9999]">
                    <ul className="shadow-2xl bg-[#262626] w-[100px] md:w-[160px] h-[46px] md:h-[80px] rounded-b-[5px]">
                      <li className="w-full h-[50%] flex items-center justify-center hover:bg-white group transition-all duration-300 ease-in-out">
                        <a className="text-white text-[10px] md:text-[14px] font-bold font-dms group-hover:text-[#262626] hover:text-blue-500" href="/myaccount">My Account</a>
                      </li>
                      <li className="w-full h-[50%] flex items-center justify-center hover:bg-white group transition-all duration-300 ease-in-out border-t-1 border-[#ffffff32] rounded-b-[5px]">
                        <a className="text-[#fff] text-[10px] md:text-[14px] font-bold font-dms group-hover:text-[#262626] hover:text-blue-500" href="/">Log Out</a>
                      </li>
                    </ul>
                  </div>
                }
            </div>
            
          </div>
          <div>
            <div className="relative" ref={cartRef}>
              <FaShoppingCart className="cursor-pointer" />
                {cart &&
                  <div 
                    className="absolute top-[44px] right-0 bg-white shadow-2xl w-[200px] lg:w-[360px] rounded-b-[5px] z-[9999]">
                    <div 
                      className="bg-[#F5F5F3] w-full flex justify-between">
                      <div className="w-1/4 m-2 lg:m-4">
                        <img src={mask} alt="" />
                      </div>
                      <div className="w-2/4 m-2 lg:m-4">
                        <h4 className="text-[#262626] text-[8px] lg:text-[14px] font-bold font-dms pb-[6px] lg:pb-[12px]">Black Smart Watch</h4>
                        <h5 className="text-[#262626] text-[8px] lg:text-[14px] font-bold font-dms">$44.00</h5>
                      </div>
                      <div className="w-1/4 flex items-center">
                        <IoCloseOutline
                          className="cursor-pointer text-xl lg:text-2xl" />
                      </div>
                    </div>
                    <div className="m-2 lg:m-4">
                      <h4 className="text-[#262626] text-[14px] font-bold font-dms">Subtotal: $44.00</h4>
                      <div className="flex justify-between">
                        <div className="w-[48%] py-2 lg:py-4">
                          <a className="border-1 py-[4px] lg:py-[13px] px-[10px] lg:px-[43px] hover:bg-[#262626] hover:text-white duration-300 ease-in-out text-[#262626] text-[14px] lg:text-[14px] font-bold font-dms hover:border-1 hover:border-[#262626] rounded-[5px]" href="/cart">View Cart</a>
                        </div>
                        <div className="w-[48%] py-2 lg:py-4">
                          <a className="border-1 py-[4px] lg:py-[13px] px-[10px] lg:px-[43px] hover:bg-[#262626] hover:text-white duration-300 ease-in-out text-[#262626] text-[14px] lg:text-[14px] font-bold font-dms hover:border-1 hover:border-[#262626] rounded-[5px]" href="/checkout">Checkout</a>
                        </div>
                      </div>
                    </div>
                  </div>
                }
            </div>
          </div>
        </div>

      </div>
      </Container>
    </header>
  );
};

export default Header;