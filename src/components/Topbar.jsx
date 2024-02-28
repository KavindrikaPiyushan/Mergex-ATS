import React from 'react';
import Bell from '../images/icon/notification.ico'
import pp from '../images/pp1.jpg';

export default function Topbar(props) {
  return (
    <div className='topBarCover h-[40px] flex justify-between  text-center  mt-[7px] mr-[10px] lg:mt-[10px] lg:mr-[15px] md:mt-[8px] md:mr-[12px]' >
      <div className="message flex flex-row pl-[20px] lg:pl-[30px] md:pl-[25px]">
       <p className='text-white opacity-[60%] text-[1.3rem] lg:text-[2rem]  md:text-[1.6rem] justify-center'>{props.msg}</p>
       <p className='text-white   text-[1.3rem]  lg:text-[2rem]  md:text-[1.6rem] justify-center' >{props.name}</p>
      </div>
      <div className="accLabelCover flex flex-row items-center mt-[7px] ml-auto gap-[10px] lg:mt-[10px] md:mt-[8px] "> 
        <img src={Bell} alt="" className='items-center w-[20px] h-[20px] lg:w-[30px] lg:h-[30px]  md:w-[25px] md:h-[25px]' />
        <div className='accLabel flex flex-row flex  bg-[#2b2b2b]  items-center justify-start rounded-[30px]  gap-[4px] w-[150px] h-[45px]  lg:rounded-[25px]  lg:gap-[8px] lg:w-[200px] lg:h-[60px] md:gap-[6px] md:w-[180px] md:h-[50px] md:rounded-[30px]'>
          <img src={pp} alt="" className='userImg  rounded-[50%] border-[solid] border-[#ffffff] ml-[0.7rem]  w-[35px] h-[35px] border-[1.5px]  lg:w-[40px] lg:h-[40px] lg:border-[2px] md:w-[37px] md:h-[37px] md:border-[2px] ' />
         <div className=''>
         <p className='name text-[#ffffff] text-left mb-[-2px] md:mb-[-4px] text-[0.7rem] lg:text-[1rem]  md:text-[0.9rem]'>{props.name}</p>
          <p className='post text-[#ffffff] opacity-[30%]  mt-[-2px] md:mt-[-4px] text-[0.7rem] lg:text-[1rem]  md:text-[0.9rem] '>{props.post}</p>
         </div>
        </div>
      </div>
    </div>
  )
}
