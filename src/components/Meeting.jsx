import React from 'react'
import Calender from '../images/icon/calender.ico'
export default function Meeting() {
  return (
    <div>
      <div className="meeting_container flex items-center justify-between bg-[rgba(255,_255,_255,_0.04)] h-[40px] border-[1px] border-[solid] border-[rgba(255,255,255,0.04)]">
    <div className="title flex items-center justify-center pl-2">
        <img src={Calender} alt="" className='w-[25px] h-[25px]' />
        <p className='text-[#ffffff] text-[0.8rem] ml-4'>SE Interview</p>
    </div>
    <div className="date pr-2">
        <p className='text-[rgba(255,_255,_255,_0.25)] text-[0.7rem]'>Date - 12/2/2024</p>
        <p className='text-[rgba(255,_255,_255,_0.25)] text-[0.7rem]'>Time - 9.00 am</p>
    </div>
   </div>
    </div>
  )
}
