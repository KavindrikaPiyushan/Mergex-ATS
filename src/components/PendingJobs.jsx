import React from 'react';
import { IoBagHandleSharp } from "react-icons/io5";
import { MdRemoveRedEye } from "react-icons/md";


export default function PendingJobs(props) {
  return (
    <div className='bg-[linear-gradient(180deg,_rgba(98,_92,_88,_0.136)_0%,_rgba(48,_48,_48,_0.2)_100%)] p-[10px] rounded-[25px] mb-[10px] 320px:text-[0.5rem]  450px:text-[0.8rem] sm:text-[0.9rem]   900px:text-[1.1rem]  1010px:text-[1.2rem] '>
      <div className='JobPostCover flex flex-row flex flex-row items-center justify-around mx-[25px] my-0 px-[25px] py-0'>
        <div className='jobPost flex flex-row items-center esm:gap-0.1 500px:gap-0.5 sm:gap-0.8 md:gap-0'>
        <IoBagHandleSharp className='esm:w-[40px] esm:h-[40px] 350px:w-[50px] 350px:w-[50px] 500px:w-[60px] 500px:h-[60px] sm:w-[70px] sm:h-[70px] md:w-[80px] md:h-[80px] 1010px:w-[90px] 1010px:h-[90px] 1300px:w-[100px] 1300px:h-[100px] xl:w-[110px] xl:h-[110px] mr-[20px] text-[rgb(238,_231,_231)]' />
        <div>
            <p className='text-[white] esm:mb-[2px] 300px:mb-[3px] 450px:mb-[4px] sm:mb-[6px] md:mb-[8px] 1010px:mb-[10px] 1300px:mb-[15px]'>{props.post}</p>
            <p className='text-[rgba(255,_255,_255,_0.25)]'>Published on {props.date}</p>
            <p className='text-[rgba(255,_255,_255,_0.25)]'>Created by {props.recruiter}</p>
        </div>
        </div>
        <div className='DecisionCover flex flex-row items-center esm:gap-0.5 350px:gap-2 500px:gap-2 sm:gap-4 md:gap-7 1010px:gap-16'>
        <MdRemoveRedEye className='esm:w-[30px] esm:h-[30px] 350px:w-[35px] 350px:w-[35px] 500px:w-[40px] 500px:h-[40px]  sm:w-[45px] sm:h-[45px] md:w-[55px] md:h-[55px] 1010px:w-[60px] 1010px:h-[60px] 1300px:w-[65px] 1300px:h-[65px] xl:w-[70px] xl:h-[70px] text-[rgba(255,_255,_255,_0.25)]' />
        <div className='Decision flex flex-col'>
          <button className='bg-[#EA7122] mx-[auto] my-[10px] flex items-center justify-center esm:w-[50px] esm:h-[15px] 350px:w-[60px] 350px:h-[18px] 500px:w-[80px] 500px:h-[20px] sm:w-[100px] sm:h-[25px] md:w-[110px] md:h-[30px] 1010px:w-[120px] 1010px:h-[32px] 1300px:w-[125px] 1300px:h-[34px] xl:w-[130px] xl:h-[35px] rounded-[30px] text-[rgb(225,_215,_215)] border-[none]'>Reject</button>
          <button className='bg-[#EA7122] mx-[auto] my-[10px] flex items-center justify-center esm:w-[50px] esm:h-[15px] 350px:w-[60px] 350px:h-[18px] 500px:w-[80px] 500px:h-[20px] sm:w-[100px] sm:h-[25px] md:w-[110px] md:h-[30px] 1010px:w-[120px] 1010px:h-[32px] 1300px:w-[125px] 1300px:h-[34px] xl:w-[130px] xl:h-[35px] rounded-[30px] text-[rgb(225,_215,_215)] border-[none]'>Accept</button>
        </div>
        </div>
      </div>
    </div>
  )
}
