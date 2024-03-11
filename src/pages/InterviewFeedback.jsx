import React, { useState } from 'react';
import Navbar from '../components/Navbar.jsx';
import Topbar from '../components/Topbar.jsx'
import CardL from '../components/CardL.jsx';
import CardS from '../components/CardS.jsx';
import Meeting from '../components/Meeting.jsx';
import Jobs from '../components/Jobs.jsx';
import PostTag from '../components/PostTag.jsx';
import PieCharts from '../components/PieCharts.jsx';
import ProgressTimeline from '../components/ProgressTimeline.jsx';


export default function InterviewFeedback() {
  const name='Kavindrika Piyushan';
  const post='Hiring Manager';    
  const{jsxNavbar, isOpened}= Navbar({name,post});

  

return (
  <div className='bg-[rgb(26,26,26)] 320px:text-[0.5rem]  450px:text-[0.8rem] sm:text-[0.9rem]   900px:text-[1.1rem]  1010px:text-[1.2rem]  '>
      <div className='dashboardCover flex flex-row'>
     {jsxNavbar}
      <div className={` w-[100%] lg:w-[81%] lg:ml-[20%] 2xl:ml-[20%]  xl:w-[100%]   ${
    isOpened ? 'opacity-[30%] 1300px:opacity-[100%]' : 'opacity-[100%]'
  } `}> 
      <Topbar msg='Interview Feedback' name='Piyushan'  post='Hiring Manager' ></Topbar>
      <div className='content text-white flex flex-row p-[0px]  bg-[linear-gradient(180deg,_rgba(43,_43,_43,_0.5)_0%,_rgba(43,_43,_43,_0)_100%)] m-[30px] h-screen rounded-[30px] 320px:text-[0.5rem]  450px:text-[0.8rem] sm:text-[0.9rem]   900px:text-[1.1rem]  1010px:text-[1.2rem]  '>
        <div className='candidates flex flex-col gap-[10px] bg-[#1E1E1E] rounded-[30px] esm:p-[10px] 450px:p-[15px] sm:p-[25px] h-[240%] sm:w-auto 450px:w-[165px] 500px:w-[175px] esm:w-[140px]'>
          <p className='text-center text-[#FFFFFF] esm:p-[4px] 450px:p-[6px] sm:p-[10px] font-general-sans pt-[0px]'>Interviewed Candidates</p>
          <PostTag name='Rasindu' post='Software Engineer' ></PostTag>
          <PostTag name='Piyushan' post='UI Designer' ></PostTag>
          <PostTag name='Gangamina' post='Software Engineer' ></PostTag>
          <PostTag name='Pabasara' post='Software Engineer' ></PostTag>

        </div>
        <div className='description flex flex-col w-full pt-[20px] box-border'>
             <div className='details  border-b-[2px] '>
              <p className='p-[20px] pt-0 '>Rasindu Ranavaka</p>
              <p className='p-[20px] pt-0'>Software Engineer</p>
              <p className='p-[20px] pt-0'>Interviewers : W.K.Piyushan</p>
             </div>
             <div className='' >
              
                <p className='pl-[20px] pt-[10px]'>Interview Feedback</p>
              
              <div className='flex esm:flex-col md:flex-row esm:text-center '>
                <div className='technical esm:p-[5px] 450px:p-[10px] sm:p-[15px] w-full m-auto hover:bg-[#1a1919]'><p>Technical Details</p> </div>
                <div className="cultural esm:p-[5px] 450px:p-[10px] sm:p-[15px] w-full m-auto hover:bg-[#1a1919]"><p>Culturel Fit</p></div>
                <div className='communication esm:p-[5px] 450px:p-[10px] sm:p-[15px] w-full m-auto hover:bg-[#1a1919]'><p>Communication</p></div>
                <div className="overall 450px:p-[10px] esm:p-[5px] sm:p-[15px] w-full m-auto hover:bg-[#1a1919]"><p>Overall Impression</p></div>

              </div>

             <div className='flex flex-row justify-around  pt-[10px] bg-[#1a1919] xl:pt-[20px] xl:pb-[20px] 2xl:pt-[25px] 2xl:pb-[25px]'>
              <PieCharts percentage='75' topic='Technical details' ></PieCharts>
              <PieCharts percentage='45' topic='Culteral Fit'></PieCharts>
              <PieCharts percentage='65'  topic='Communication'></PieCharts>
              
              </div>
              <div>

              </div>
             <div>
              <p className='p-[20px]'>Interview Feedbacks</p>
              <div className='p-[20px] m-[20px] rounded-[30px] bg-[#292929]'>
                <textarea  name="" id="" defaultValue='Feedback'  className='bg-[#292929] h-[30vh] w-full border-none outline-none p-[10px] '  />
              </div>
             </div>
             <div>
              <p className='p-[20px]'>Recruiter Feedbacks</p>
              <div className='p-[20px] m-[20px] rounded-[30px] bg-[#292929]'>
                <textarea  name="" id="" defaultValue='Feedback'  className='bg-[#292929] h-[30vh] w-full border-none outline-none p-[10px] '  />
              </div>
             </div>
             <div>
              <p className='p-[20px]'>Enter Your Comment</p>
              <div className='p-[20px] m-[20px] rounded-[30px] bg-[#292929]'>
                <textarea  name="" id="" defaultValue='Feedback'  className='bg-[#292929] h-[30vh] w-full border-none outline-none p-[10px] '  />
              </div>
             </div>
             <ProgressTimeline></ProgressTimeline>
             </div>
             
        </div>

      </div>   
      </div>
      </div>
      
  </div>
)
}
