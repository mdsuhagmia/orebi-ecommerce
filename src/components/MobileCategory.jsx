import React from 'react'

const MobileCategory = () => {
  return (
    <div className="md:hidden bg-[#262626] py-3 w-[130px]">
      <ul>
        <li className="py-1 cursor-pointer text-[rgba(255,255,255,0.7)] text-[12px] font-dms font-bold pl-3 hover:text-white">
          <a href="#">Accesories</a>
        </li>
        <li className="py-1 cursor-pointer text-[rgba(255,255,255,0.7)] text-[12px] font-dms font-bold pl-3 hover:text-white">
          <a href="#">Furniture</a>
        </li>
        <li className="py-1 cursor-pointer text-[rgba(255,255,255,0.7)] text-[12px] font-dms font-bold pl-3 hover:text-white">
          <a href="#">Electronics</a>
        </li>
        <li className="py-1 cursor-pointer text-[rgba(255,255,255,0.7)] text-[12px] font-dms font-bold pl-3 hover:text-white">
          <a href="#">Clothes</a>
        </li>
        <li className="py-1 cursor-pointer text-[rgba(255,255,255,0.7)] text-[12px] font-dms font-bold pl-3 hover:text-white">
          <a href="#">Bags</a>
        </li>
      </ul>
    </div>
  )
}

export default MobileCategory