import React from 'react'
import Container from '../components/Container'

const NotFound = () => {
  return (
    <section>
      <Container>
        <div className='w-1/2'>
          <h1 className='text-[#262626] text-[200px] font-dms font-bold pt-[80px] pb-[49px]'>404</h1>
          <p className='text-[#767676] text-[16px] font-dms font-bold pb-[49px]'>The page you were looking for couldn't be found. The page could be removed or you misspelled the word while searching for it. Maybe try a search?</p>
          <div className='pb-[120px]'>
            <form action="search">
              <input type="search" 
                placeholder='Type to search'
                className='h-[50px] w-full px-4 border-2 border-[#0000005b] rounded-[10px] focus:border-blue-500 outline-none'/>
              <div className='pt-[50px]'>
                <a href="/"
                  className='text-[#fff] text-[14px] font-dms font-bold px-[50px] py-[16px] bg-[#262626] rounded-[5px]'>
                  Back to Home
                </a>
              </div>
            </form>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default NotFound