
import Bell from '../images/icon/notification.ico'
import pp from '../images/pp1.jpg';
import React, { useState } from 'react';



export default function Topbar(props) {
  const [isOpened, setIsOpened] = useState(false);   const toggleDrawer = () => {
    setIsOpened(!isOpened);
  };



 
  return(
    
      <div className='topBarCover h-[40px] flex justify-between  text-center  mt-[7px] mr-[25px] lg:mt-[10px] lg:mr-[30px] md:mt-[8px] md:mr-[27px]' >
        <div className="message flex flex-row pl-[50px] lg:pl-[30px] text-[1.3rem] lg:text-[2rem]  md:text-[1.45rem] justify-center esm:text-[0.9rem] esm:items-center">
         <p className='text-white opacity-[60%] '>{props.msg}</p>
         <p className='text-white' >{props.name}</p>
        </div>
        <div className="accLabelCover flex flex-row items-center mt-[7px] ml-auto gap-[10px] lg:mt-[10px] md:mt-[8px] "> 
          <img src={Bell} alt="" className='items-center w-[20px] h-[20px] lg:w-[30px] lg:h-[30px]  md:w-[25px] md:h-[25px]' />
          <div className='accLabel flex flex-row flex  bg-[#2b2b2b]  items-center justify-start rounded-[30px]  gap-[4px] w-[150px] h-[45px]  lg:rounded-[25px]  lg:gap-[8px] lg:w-[200px] lg:h-[60px] sm:gap-[6px] sm:w-[180px] sm:h-[50px] sm:rounded-[30px] esm:w-[fit-content]'>
            <img src={pp} alt="" className='userImg  rounded-[50%] border-[solid] border-[#ffffff] ml-[0.7rem]  w-[35px] h-[35px] border-[1.5px]  lg:w-[40px] lg:h-[40px] lg:border-[2px] md:w-[37px] md:h-[37px] md:border-[2px] esm:m-1 ' />
           <div className='block esm:hidden sm:block'>
           <p className='name text-[#ffffff] text-left mb-[-2px] md:mb-[-4px] text-[0.7rem] lg:text-[1rem]  md:text-[0.9rem]'>{props.name}</p>
            <p className='post text-[#ffffff] opacity-[30%]  mt-[-2px] md:mt-[-4px] text-[0.7rem] lg:text-[1rem]  md:text-[0.9rem] '>{props.post}</p>
           </div>
          </div>
        </div>
      </div>
    )
}
