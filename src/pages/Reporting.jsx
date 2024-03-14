import React, { useState } from 'react';
import Navbar from '../components/Navbar.jsx';
import Topbar from '../components/Topbar.jsx';



export default function Dashboard() {
  
    const name='Kavindrika Piyushan';
    const post='Hiring Manager';    
    const{jsxNavbar, isOpened}= Navbar({name,post});

    
 
  return (
    <div className='bg-[rgb(26,26,26)]'>
        <div className='dashboardCover flex flex-row'>
       {jsxNavbar}
        <div className={` w-[100%] lg:w-[81%] lg:ml-[20%] 2xl:ml-[20%]  xl:w-[100%]   ${
      isOpened ? 'opacity-[30%] 1300px:opacity-[100%]' : 'opacity-[100%]'
    } `}> 
        <Topbar msg='Reporting' nameforGreeting='' name='Piyushan'  post='Hiring Manager' ></Topbar>
        <div className='content text-white flex flex-row p-[0px]  bg-[#2b2b2b] m-[30px]  h-fit rounded-[30px] 320px:text-[0.5rem]  450px:text-[0.8rem] sm:text-[0.9rem]   900px:text-[1.1rem]  1010px:text-[1.2rem]  '>
        <div className='candidates   flex flex-col gap-[10px] bg-[#1E1E1E] rounded-[30px] esm:p-[10px] 450px:p-[15px] sm:p-[25px]  sm:w-auto 450px:w-[165px] 500px:w-[175px] lg:w-[250px] esm:w-[140px] sm:pl-[0px] sm:pr-[0px]'>
          <p className='text-center text-[#FFFFFF] esm:p-[4px] 450px:p-[6px] sm:p-[10px] font-general-sans pt-[0px]'>Interviewed Candidates</p>
       
          <div className='p-[10px] text-center border-[1px] border-[solid] border-[grey]'>Software Engineer</div>
          <div className='p-[10px] text-center'>QA </div>
          <div className='p-[10px] text-center'> Backend dev</div>
        </div>
       
              

             
           
           
          
            
               
          
          
             
             
        </div>
        </div>
        </div>
        
    </div>
  )
}
