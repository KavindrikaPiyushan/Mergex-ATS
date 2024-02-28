import React from 'react'
import Navbar from '../components/Navbar.jsx';
import Topbar from '../components/Topbar.jsx'

export default function Dashboard() {
  return (
    <div className='bg-[rgb(26,26,26)]'>
        <div className='dashboardCover flex flex-row'>
        <Navbar name='Kavindrika Piyushan' post='Hiring Manager'></Navbar>
        <div className='Content w-[81%]'> 
        <Topbar msg='Good Morning,' name='Piyushan' post='Hiring Manager'></Topbar>
        <div className='text-white p-[30px]'>
          aksaksas
        </div>
        </div>
        </div>
        
    </div>
  )
}
