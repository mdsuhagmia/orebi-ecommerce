import React, { useContext, useEffect, useRef, useState } from 'react'
import Container from '../components/Container'
import { NavLink } from 'react-router-dom'
import { IoIosArrowForward } from 'react-icons/io'
import { FaAngleDown, FaAngleUp, FaList } from 'react-icons/fa'
import { ApiData } from './ContextApi'
import Post from './Post'
import Pagination from './Pagination'
import { TfiLayoutGrid2Alt } from 'react-icons/tfi'

const Products = () => {
  let data = useContext(ApiData)

  let [perPage, setPerPage] = useState(18)
  let [currentPage, setCurrentPage] = useState(1)

  let lastPage = perPage * currentPage
  let firstPage = lastPage - perPage
  let allPage = data.slice(firstPage, lastPage)

  let pageNumber = []
  for(let i = 0; i < Math.ceil(data.length / perPage); i++){
    pageNumber.push(i)
  }

  let Paginate = (pagiIndex)=>{
    setCurrentPage(pagiIndex + 1)
  }

  let next = ()=>{
    if(currentPage < pageNumber.length){
      setCurrentPage((nextp)=> nextp + 1)
      // window.scrollTo({top: 0, behavior: 'smooth'})
    }
  }

  let prev = ()=>{
    if(currentPage > 1){
      setCurrentPage((nextp)=> nextp - 1)
      // window.scrollTo({top: 0, behavior: 'smooth'})
    }
  }

  let handleParPageShow = (e)=>{
    setPerPage(e.target.value)
  }

  let [shopCategory, setShopCategory] = useState([])
  useEffect(()=>{
    setShopCategory([...new Set(data.map((item)=>item.category))])
    setBrandShow([...new Set(data.map((item)=>item.brand))])
  }, [data])

  let [filterShow, setFilterShow] = useState([])
  let handleShopCategory = (citem) =>{
    let categoryFilter = data.filter((item)=> item.category == citem)
    setFilterShow(categoryFilter)
  }

  let [brandShow, setBrandShow] = useState([])
  let handleBandCategory = (bitem)=>{
    let brandFilter = data.filter((item)=> item.brand == bitem)
    setFilterShow(brandFilter)
  }

  let [listView, setListView] = useState("")
  let handleListView = ()=>{
    setListView("active")
  }

  let [mCate, setMCate] = useState(false)
  let mCateRef = useRef()
  useEffect(()=>{
    document.addEventListener("click", (e)=>{
      if(mCateRef.current.contains(e.target)){
        setMCate(!mCate)
      }else{
        setMCate(false)
      }
    })
  },[mCate])

  return (
    <>
    <section className='py-[54px] md:py-[64px] lg:py-[80px]'>
      <Container>
        <div className='pb-10 md:pb-16'>
          <h2 className='text-[#262626] text-[39px] md:text-[49px] font-bold font-dms pb-[2px]'>Products</h2>
          <ul className='flex'>
            <li>
              <NavLink to={"/"}
                className={({ isActive }) => `text-[14px] font-dms font-bold ${isActive ? "text-[#262626]" : "text-[#767676]"}`}>
                Home
              </NavLink>
            </li>
            <IoIosArrowForward className='mt-2' />
            <li className='mt-[2px]'>
              <NavLink to={"/shop"}
                className={({ isActive }) => `text-[14px] font-dms font-bold ${isActive ? "text-[#262626]" : "text-[#767676]"}`}>
                Shop
              </NavLink>
            </li>
          </ul>
        </div>
        <div className='flex justify-between'>
          <div className='hidden md:block w-[22%] pt-2 sticky top-0 h-screen overflow-y-auto'>

            <div className='pb-2 border-1 border-[#00000064] pt-2 rounded-[5px] mb-4'>
              <h4 className='text-[#262626] text-[16px] lg:text-[20px] font-bold font-dms pl-2'>Shop by Category</h4>
              <div className='py-4'>
                <ul className=''>
                  <li onClick={()=>setFilterShow("")}
                    className="py-2 hover:bg-gray-200 rounded-[5px] text-[#767676] text-[16px] font-dms font-medium pl-4 cursor-pointer capitalize">
                      All Products
                  </li>
                  {shopCategory.map((item, index)=>(
                    <li key={index}
                      onClick={()=>handleShopCategory(item)}
                      className={`py-2 hover:bg-gray-200 rounded-[5px] text-[#767676] text-[16px] font-dms font-medium pl-4 cursor-pointer capitalize`}>
                        {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className='pb-2 border-1 border-[#00000064] pt-2 rounded-[5px] mb-4'>
              <h4 className='text-[#262626] text-[16px] lg:text-[20px] font-bold font-dms pl-2'>Shop by Brand</h4>
              <div className='py-4'>
                <ul className=''>
                {brandShow.map((item)=>(
                  <li onClick={()=>handleBandCategory(item)} className='py-2 hover:bg-gray-200 rounded-[5px] text-[#767676] text-[16px] font-dms font-medium pl-4 cursor-pointer'>
                    {item}
                  </li>
                ))}
                </ul>
              </div>
            </div>
            
            <div className='pb-2 border-1 border-[#00000064] pt-2 rounded-[5px] mb-4'>
              <h4 className='text-[#262626] text-[16px] lg:text-[20px] font-bold font-dms pl-2'>Shop by Price</h4>
              <div className='py-4'>
                <ul className=''>
                  <li className='py-2 hover:bg-gray-200 rounded-[5px] text-[#767676] text-[16px] font-dms font-medium pl-4 cursor-pointer'>
                    $30.00 - $39.99
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className='w-full md:w-[75%]'>
            <div className='flex items-center justify-between pb-[60px]'>
              <div className=''>
                <div className='flex items-center gap-3 md:gap-6'>
                  <TfiLayoutGrid2Alt
                    onClick={()=>setListView("")}
                    className={`cursor-pointer ${listView == "" ? "text-white p-[6px] md:p-[8px] rounded-[5px] text-2xl md:text-3xl bg-blue-500" : "text-black p-[6px] md:p-[8px] rounded-[5px] text-2xl md:text-3xl bg-blue-50" }`} />
                  <FaList 
                    onClick={handleListView}
                    className={`cursor-pointer ${listView == "active" ? "text-white p-[6px] md:p-[8px] rounded-[5px] text-2xl md:text-3xl bg-blue-500" : "text-black p-[6px] md:p-[8px] rounded-[5px] text-2xl md:text-3xl bg-blue-50" }`} />
                </div>
              </div>
                <div className='block md:hidden relative'>
                  <div ref={mCateRef} className='flex items-center gap-x-2 cursor-pointer'>
                    <h4 className='text-[#262626] text-[16px] lg:text-[16px] font-bold font-dms'>Category</h4>
                    {mCate == true ? <FaAngleUp /> : <FaAngleDown /> }
                  </div>
                  {mCate && (
                    <div className='absolute top-10 left-0 bg-white border-2 border-[#0000004b] shadow-2xl z-[9999] w-42'>
                    <ul className=''>
                      <li onClick={() => setFilterShow("")}
                        className="py-2 hover:bg-gray-200 rounded-[5px] text-[#767676] text-[16px] font-dms font-medium pl-4 cursor-pointer capitalize">
                        All Products
                      </li>
                      {shopCategory.map((item, index) => (
                        <li key={index}
                          onClick={() => handleShopCategory(item)}
                          className={`py-2 hover:bg-gray-200 rounded-[5px] text-[#767676] text-[16px] font-dms font-medium pl-4 cursor-pointer capitalize`}>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  )}
                </div>
              <div className='hidden md:block'>
                <div className='flex items-center'>
                  <h6 className='pr-2'>Sort by:</h6>
                  <select name="price" id="price" className='border-1 border-[#00000036] px-4 py-[3px] outline-0 rounded-[3px]'>
                    <option value="Price">Price</option>
                    <option value="LowtoHigh">Low to High</option>
                    <option value="HightoLow">High to Low</option>
                  </select>
                </div>
              </div>
              <div className=''>
                <div className='flex items-center justify-end'>
                  <h6 className='pr-2'>Show:</h6>
                  <div className=''>
                    <select onChange={handleParPageShow} name="" id="" className='border-1 border-[#00000036] px-4 py-[3px] outline-0 rounded-[3px]'>
                      <option value="18">18</option>
                      <option value="30">30</option>
                      <option value="39">39</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <Post allPage={allPage}
              filterShow={filterShow}
              brandShow={brandShow}
              listView={listView}/>
            <Pagination 
              pageNumber={pageNumber}
              Paginate={Paginate}
              next={next}
              prev={prev}
              currentPage={currentPage}
              filterShow={filterShow}/>
          </div>
        </div>
      </Container>
    </section>
    </>
  )
}

export default Products