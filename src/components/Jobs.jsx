import React from 'react'
import Bag from '../images/icon/bag.ico'
export default function Jobs() {
  return (
    <div>
       <div className="job_container flex items-center justify-around 900px:justify-between bg-[rgba(255,_255,_255,_0.04)] h-[40px] border-[1px] border-[solid] border-[rgba(255,255,255,0.04)]">
    <div className="title flex items-center justify-center pl-2 ">
        <img src={Bag} alt="" className='w-[25px] h-[25px]' />
        <p className='text-[#ffffff] text-[0.8rem] ml-4'>Software Engineer</p>
    </div>
   </div>
    </div>
  )
}
