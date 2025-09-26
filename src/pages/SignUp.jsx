import React from 'react'
import Container from '../components/Container'
import { NavLink } from 'react-router-dom'
import { IoIosArrowForward } from 'react-icons/io'

const SignUp = () => {
  return (
    <section className='py-12'>
      <Container>
        <div className=''>
          <h1 className='text-[#262626] text-[39px] md:text-[49px] font-bold font-dms pb-[2px]'>Sign Up</h1>
          <ul className='flex'>
            <li>
              <NavLink to={"/"}
                className={({ isActive }) => `text-[14px] font-dms font-bold ${isActive ? "text-[#262626]" : "text-[#767676]"}`}>
                Home
              </NavLink>
            </li>
            <IoIosArrowForward className='mt-2' />
            <li className='mt-[2px]'>
              <NavLink to={"/signup"}
                className={({ isActive }) => `text-[14px] font-dms font-bold ${isActive ? "text-[#262626]" : "text-[#262626]"}`}>
                Sign Up
              </NavLink>
            </li>
          </ul>
        </div>
        <form action="">
          <div className='w-full lg:w-1/2'>
            <p className='text-[#767676] text-[16px] font-medium font-dms py-[80px] leading-[30px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.</p>
            <h2 className='text-[#262626] text-[39px] md:text-[49px] font-bold font-dms pb-[42px]'>Your Personal Details</h2>
            <div className='flex justify-between'>
              <div className='pb-[30px] w-[48%]'>
                <label
                  className='block text-[#262626] text-[18px] md:text-[16px] font-bold font-dms pb-[8px]'>
                  First Name
                </label>
                <input type="text"
                  placeholder='First Name'
                  className='px-4 py-2 border-2 border-[#00000018] rounded-sm outline-0 w-full focus:border-blue-500' 
                  required autoComplete='name'/>
              </div>
              <div className='pb-[30px] w-[48%]'>
                <label
                  className='block text-[#262626] text-[18px] md:text-[16px] font-bold font-dms pb-[8px]'>
                  Last Name
                </label>
                <input type="text"
                  placeholder='Last Name'
                  className='px-4 py-2 border-2 border-[#00000018] rounded-sm outline-0 w-full focus:border-blue-500' 
                  required autoComplete='name'/>
              </div>
            </div>
            <div className='flex justify-between'>
              <div className='pb-[30px] w-[48%]'>
                <label
                  className='block text-[#262626] text-[18px] md:text-[16px] font-bold font-dms pb-[8px]'>
                  Email address
                </label>
                <input  type="email"
                  placeholder='company@domain.com'
                  className='px-4 py-2 border-2 border-[#00000018] rounded-sm outline-0 w-full focus:border-blue-500' 
                  required autoComplete='email'/>
              </div>
              <div className='pb-[30px] w-[48%]'>
                <label
                  className='block text-[#262626] text-[18px] md:text-[16px] font-bold font-dms pb-[8px]'>
                  Telephone
                </label>
                <input type="number"
                  placeholder='Your phone number'
                  className='px-4 py-2 border-2 border-[#00000018] rounded-sm outline-0 w-full focus:border-blue-500' 
                  required autoComplete='number'/>
              </div>
            </div>
            <h2 className='text-[#262626] text-[39px] md:text-[49px] font-bold font-dms pb-[42px] pt-[80px]'>New Customer</h2>
            <div className='flex justify-between'>
              <div className='pb-[30px] w-[48%]'>
                <label
                  className='block text-[#262626] text-[18px] md:text-[16px] font-bold font-dms pb-[8px]'>
                  Address 1
                </label>
                <input type="text"
                  placeholder='4279 Zboncak Port Suite 6212'
                  className='px-4 py-2 border-2 border-[#00000018] rounded-sm outline-0 w-full focus:border-blue-500' 
                  required autoComplete='street-address'/>
              </div>
              <div className='pb-[30px] w-[48%]'>
                <label
                  className='block text-[#262626] text-[18px] md:text-[16px] font-bold font-dms pb-[8px]'>
                  Address 2
                </label>
                <input type="text"
                  placeholder='-'
                  className='px-4 py-2 border-2 border-[#00000018] rounded-sm outline-0 w-full focus:border-blue-500' 
                  required autoComplete='street-address'/>
              </div>
            </div>
            <div className='flex justify-between'>
              <div className='pb-[30px] w-[48%]'>
                <label
                  className='block text-[#262626] text-[18px] md:text-[16px] font-bold font-dms pb-[8px]'>
                  City
                </label>
                <input type="text"
                  placeholder='Your city'
                  className='px-4 py-2 border-2 border-[#00000018] rounded-sm outline-0 w-full focus:border-blue-500' 
                  required autoComplete='street-address'/>
              </div>
              <div className='pb-[30px] w-[48%]'>
                <label
                  className='block text-[#262626] text-[18px] md:text-[16px] font-bold font-dms pb-[8px]'>
                  Post Code
                </label>
                <input type="number"
                  placeholder='05228'
                  className='px-4 py-2 border-2 border-[#00000018] rounded-sm outline-0 w-full focus:border-blue-500' 
                  required autoComplete='number'/>
              </div>
            </div>
            <div className='flex justify-between'>
              <div className='pb-[30px] w-[48%]'>
                <label
                  className='block text-[#262626] text-[18px] md:text-[16px] font-bold font-dms pb-[8px]'>
                  Division
                </label>
                <select name="" id=""
                  required autoComplete='division'
                  className='px-4 py-2 border-2 border-[#00000018] rounded-sm outline-0 w-full focus:border-blue-500'>
                  <option value="">--Please select--</option>
                  <option value="dhaka">Dhaka</option>
                  <option value="chattogram">Chattogram</option>
                  <option value="rajshahi">Rajshahi</option>
                  <option value="khulna">Khulna</option>
                  <option value="barisal">Barisal</option>
                  <option value="sylhet">Sylhet</option>
                  <option value="rangpur">Rangpur</option>
                  <option value="mymensingh">Mymensingh</option>
                </select>
              </div>
              <div className='pb-[30px] w-[48%]'>
                <label
                  className='block text-[#262626] text-[18px] md:text-[16px] font-bold font-dms pb-[8px]'>
                  District
                </label>
                <select 
                  name="district" 
                  id="district"
                  required autoComplete='district'
                  className='px-4 py-2 border-2 border-[#00000018] rounded-sm outline-0 w-full focus:border-blue-500'>
                  <option value="">--Please select--</option>
                  <option value="jamalpur">Jamalpur</option>
                  <option value="Bagerhat">Bagerhat</option>
                  <option value="Bandarban">Bandarban</option>
                  <option value="Barguna">Barguna</option>
                  <option value="Barisal">Barisal</option>
                  <option value="Bhola">Bhola</option>
                  <option value="Bogra">Bogra</option>
                  <option value="Brahmanbaria">Brahmanbaria</option>
                  <option value="Chandpur">Chandpur</option>
                  <option value="Chapai Nawabganj">Chapai Nawabganj</option>
                  <option value="Chattogram">Chattogram</option>
                  <option value="Chuadanga">Chuadanga</option>
                  <option value="Comilla">Comilla</option>
                  <option value="Cox's Bazar">Cox's Bazar</option>
                  <option value="Dhaka">Dhaka</option>
                  <option value="Dinajpur">Dinajpur</option>
                  <option value="Faridpur">Faridpur</option>
                  <option value="Feni">Feni</option>
                  <option value="Gaibandha">Gaibandha</option>
                  <option value="Gazipur">Gazipur</option>
                  <option value="Gopalganj">Gopalganj</option>
                  <option value="Habiganj">Habiganj</option>
                  <option value="Jashore">Jashore</option>
                  <option value="Jhalokathi">Jhalokathi</option>
                  <option value="Jhenaidah">Jhenaidah</option>
                  <option value="Joypurhat">Joypurhat</option>
                  <option value="Khagrachari">Khagrachari</option>
                  <option value="Khulna">Khulna</option>
                  <option value="Kishoreganj">Kishoreganj</option>
                  <option value="Kurigram">Kurigram</option>
                  <option value="Kushtia">Kushtia</option>
                  <option value="Lakshmipur">Lakshmipur</option>
                  <option value="Lalmonirhat">Lalmonirhat</option>
                  <option value="Madaripur">Madaripur</option>
                  <option value="Magura">Magura</option>
                  <option value="Manikganj">Manikganj</option>
                  <option value="Meherpur">Meherpur</option>
                  <option value="Moulvibazar">Moulvibazar</option>
                  <option value="Munshiganj">Munshiganj</option>
                  <option value="Mymensingh">Mymensingh</option>
                  <option value="Naogaon">Naogaon</option>
                  <option value="Narail">Narail</option>
                  <option value="Narayanganj">Narayanganj</option>
                  <option value="Narsingdi">Narsingdi</option>
                  <option value="Natore">Natore</option>
                  <option value="Netrokona">Netrokona</option>
                  <option value="Nilphamari">Nilphamari</option>
                  <option value="Noakhali">Noakhali</option>
                  <option value="Pabna">Pabna</option>
                  <option value="Panchagarh">Panchagarh</option>
                  <option value="Patuakhali">Patuakhali</option>
                  <option value="Pirojpur">Pirojpur</option>
                  <option value="Rajbari">Rajbari</option>
                  <option value="Rajshahi">Rajshahi</option>
                  <option value="Rangamati">Rangamati</option>
                  <option value="Rangpur">Rangpur</option>
                  <option value="Satkhira">Satkhira</option>
                  <option value="Shariatpur">Shariatpur</option>
                  <option value="Sherpur">Sherpur</option>
                  <option value="Sirajganj">Sirajganj</option>
                  <option value="Sunamganj">Sunamganj</option>
                  <option value="Sylhet">Sylhet</option>
                  <option value="Tangail">Tangail</option>
                  <option value="Thakurgaon">Thakurgaon</option>
                </select>
              </div>
            </div>
            <h2 className='text-[#262626] text-[39px] md:text-[49px] font-bold font-dms pb-[42px] pt-[80px]'>Your Password</h2>
            <div className='flex justify-between'>
              <div className='pb-[30px] w-[48%]'>
                <label
                  className='block text-[#262626] text-[17px] md:text-[16px] font-bold font-dms pb-[8px]'>
                  Password
                </label>
                <input type="password"
                  placeholder='Password'
                  className='px-4 py-2 border-2 border-[#00000018] rounded-sm outline-0 w-full focus:border-blue-500' 
                  required autoComplete='new-password'/>
              </div>
              <div className='pb-[30px] w-[48%]'>
                <label
                  className='block text-[#262626]  text-[17px] md:text-[16px] font-bold font-dms pb-[8px]'>
                  Repeat password
                </label>
                <input type="password"
                  placeholder='Repeat password'
                  className='px-4 py-2 border-2 border-[#00000018] rounded-sm outline-0 w-full focus:border-blue-500' 
                  required autoComplete='new-password'/>
              </div>
            </div>
            <div className='pb-[80px] pt-4'>
              <div className='flex items-center pb-4'>
                <input type="checkbox"
                required autoComplete='checkbox'
                className='' />
                <label htmlFor=""
                  className='text-[#767676] text-[14px] md:text-[12px] font-bold font-dms pl-2'>
                   I have read and agree to the Privacy Policy
                </label>
              </div>
              <div className='pb-4 flex items-center'>
                <label className='text-[#767676] text-[14px] md:text-[12px] font-bold font-dms pr-6'>
                  Subscribe Newsletter
                </label>

                <div className='pr-4 flex items-center gap-1'>
                  <input
                    type="radio"
                    name='ami'
                    className="accent-blue-600"
                    required
                  />
                  <label htmlFor="yes" className='text-sm text-gray-700'>Yes</label>
                </div>

                <div className='flex items-center gap-1'>
                  <input
                    type="radio"
                    name='ami'
                    className="accent-red-600"
                  />
                  <label htmlFor="no" className='text-sm text-gray-700'>No</label>
                </div>
              </div>
              <button type='submit'
                className='text-[18px] md:text-[16px] font-bold font-dms px-20 py-2 bg-[#262626] text-white rounded-md cursor-pointer hover:bg-[#6e6d6d]'>
                  Login
              </button>
              <p className="text-md mt-10 text-gray-600">
              Already have an account? <a href="/login" className="text-blue-500 hover:underline">Back to Login</a>
            </p>
            </div>
          </div>
        </form>
      </Container>
    </section>
  )
}

export default SignUp