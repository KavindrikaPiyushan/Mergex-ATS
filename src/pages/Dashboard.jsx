import React from 'react'
import Navbar from '../components/Navbar.jsx';
import Topbar from '../components/Topbar.jsx'

export default function Dashboard() {
 
  return (
    <div className='bg-[rgb(26,26,26)]'>
        <div className='dashboardCover flex flex-row'>
        <Navbar name='Kavindrika Piyushan' post='Hiring Manager' ></Navbar>
        <div className='Content w-[100%] lg:w-[81%] lg:ml-[20%] '> 
        <Topbar msg='Good Morning,' name='Piyushan'  post='Hiring Manager' ></Topbar>
        <div className='text-white p-[30px] bg-[linear-gradient(180deg,_rgba(43,_43,_43,_0.5)_0%,_rgba(43,_43,_43,_0)_100%)] m-[30px] h-screen rounded-[30px]'>
          aksaksas
        </div>
        </div>
        </div>
        
    </div>
  )
}
