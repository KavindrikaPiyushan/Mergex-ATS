import React from 'react';
import Navbar from '../components/Navbar.jsx';
import Topbar from '../components/Topbar.jsx'
import PendingJobs from '../components/PendingJobs.jsx';

export default function JobApproval() {
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
        <Topbar msg='Job Approval' name='Piyushan'  post='Hiring Manager' ></Topbar>
        <div className='content text-white p-[30px] bg-[linear-gradient(180deg,_rgba(43,_43,_43,_0.5)_0%,_rgba(43,_43,_43,_0)_100%)] m-[30px] h-screen rounded-[30px] '>
          <p className='pb-[20px] 320px:text-[0.5rem]  450px:text-[0.8rem] sm:text-[0.9rem]   900px:text-[1.1rem]  1010px:text-[1.2rem] '>Pending jobs</p>
          <div>
            <div>
            <PendingJobs post='Software Engineer' date='2024-06-03' recruiter='Pramudi'></PendingJobs>
            <PendingJobs post='Software Engineer' date='2024-06-03' recruiter='Pramudi'></PendingJobs>
            <PendingJobs post='Software Engineer' date='2024-06-03' recruiter='Pramudi'></PendingJobs>
            <PendingJobs post='Software Engineer' date='2024-06-03' recruiter='Pramudi'></PendingJobs>
            <PendingJobs post='Software Engineer' date='2024-06-03' recruiter='Pramudi'></PendingJobs>
            <PendingJobs post='Software Engineer' date='2024-06-03' recruiter='Pramudi'></PendingJobs>
            <PendingJobs post='Software Engineer' date='2024-06-03' recruiter='Pramudi'></PendingJobs>
            <PendingJobs post='Software Engineer' date='2024-06-03' recruiter='Pramudi'></PendingJobs>
            <PendingJobs post='Software Engineer' date='2024-06-03' recruiter='Pramudi'></PendingJobs>
            <PendingJobs post='Software Engineer' date='2024-06-03' recruiter='Pramudi'></PendingJobs>
            </div>
          </div>
        </div>
        </div>
        </div>
        
    </div>
  )
}
