import React, { useState } from 'react';
import Navbar from '../components/Navbar.jsx';
import Topbar from '../components/Topbar.jsx'
import CardL from '../components/CardL.jsx';
import CardS from '../components/CardS.jsx';
import Meeting from '../components/Meeting.jsx';
import Jobs from '../components/Jobs.jsx';

export default function HiringDecision() {
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
      <Topbar msg='Hiring Decision' name='Piyushan'  post='Hiring Manager' ></Topbar>
      <div className='content text-white p-[30px] bg-[linear-gradient(180deg,_rgba(43,_43,_43,_0.5)_0%,_rgba(43,_43,_43,_0)_100%)] m-[30px] h-screen rounded-[30px] '>
      
         

      </div>
      </div>
      </div>
      
  </div>
)
}