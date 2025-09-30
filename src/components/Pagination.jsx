import React from 'react'

const Pagination = ({pageNumber, Paginate, next, prev, currentPage, filterShow}) => {
  
  return (
    <nav aria-label="Page navigation example" className={`${filterShow.length > 0 ? "hidden" : "pt-8"}`}>
      <ul className="inline-flex -space-x-px text-base h-6 lg:h-10">
        <li onClick={prev}>
          <a className="flex items-center justify-center px-2 lg:px-4 h-6 lg:h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg cursor-pointer select-none text-[8px] sm:text-[16px] lg:text-[16px]">Previous</a>
        </li>
        {pageNumber.map((item, indexc)=>(
          <li key={indexc} onClick={()=>Paginate(item)}>
            <a className={` ${currentPage == indexc + 1 ? "flex items-center justify-center px-2 lg:px-4 h-6 lg:h-10 leading-tight bg-gray-900 text-white  border border-gray-300 cursor-pointer text-[8px] sm:text-[16px] lg:text-[16px]" : "flex items-center justify-center px-2 lg:px-4 h-6 lg:h-10 leading-tight bg-white  border border-gray-300 cursor-pointer select-none text-[8px] sm:text-[16px] lg:text-[16px]" }`}>
              {item + 1}
            </a>
          </li>
        ))}
        <li onClick={next}>
          <a className="flex items-center justify-center px-2 lg:px-4 h-6 lg:h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg cursor-pointer select-none text-[8px] sm:text-[16px] lg:text-[16px]">Next</a>
        </li>
      </ul>
    </nav>
  )
}

export default Pagination