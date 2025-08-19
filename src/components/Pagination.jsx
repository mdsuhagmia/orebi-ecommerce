import React from 'react'

const Pagination = ({pageNumber, Paginate, next, prev, currentPage}) => {
  
  return (
    <nav aria-label="Page navigation example" className='pt-8'>
      <ul className="inline-flex -space-x-px text-base h-10">
        <li onClick={prev}>
          <a className="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg cursor-pointer">Previous</a>
        </li>
        {pageNumber.map((item, indexc)=>(
          <li key={indexc} onClick={()=>{
            Paginate(item)
            window.scrollTo({top: 0, behavior: 'smooth'})
            }}>
            <a className={` ${currentPage == indexc + 1 ? "flex items-center justify-center px-4 h-10 leading-tight bg-gray-900 text-white  border border-gray-300 cursor-pointer" : "flex items-center justify-center px-4 h-10 leading-tight bg-white  border border-gray-300 cursor-pointer" }`}>
              {item + 1}
            </a>
          </li>
        ))}
        <li onClick={next}>
          <a className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg cursor-pointer">Next</a>
        </li>
      </ul>
    </nav>
  )
}

export default Pagination