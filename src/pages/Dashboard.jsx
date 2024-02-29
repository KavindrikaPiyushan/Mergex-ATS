import React from 'react'
import Navbar from '../components/Navbar.jsx';
import Topbar from '../components/Topbar.jsx'
import CardL from '../components/CardL.jsx';
import CardS from '../components/CardS.jsx';
import Meeting from '../components/Meeting.jsx';
import Jobs from '../components/Jobs.jsx';


export default function Dashboard() {
 
  return (
    <div className='bg-[rgb(26,26,26)]'>
        <div className='dashboardCover flex flex-row'>
        <Navbar name='Kavindrika Piyushan' post='Hiring Manager' ></Navbar>
        <div className='Content w-[100%] lg:w-[81%] lg:ml-[20%] 2xl:ml-[20%]  xl:w-[100%] '> 
        <Topbar msg='Good Morning,' name='Piyushan'  post='Hiring Manager' ></Topbar>
        <div className='text-white p-[30px] bg-[linear-gradient(180deg,_rgba(43,_43,_43,_0.5)_0%,_rgba(43,_43,_43,_0)_100%)] m-[30px] h-screen rounded-[30px]'>
        <div className="card_container mt-[10px] "> 
            <div className="card_container_1 flex gap-[2.2rem] mb-6 justify-between">
                <CardL name="Applications" val="13" />
                <CardL name="Candidates" val="19"/>
                <CardL name="Posted Jobes" val="16"/>
                <CardL name="Unread Message" val="15"/>
            </div>

            <div className="card_container_2 flex gap-10 mb-6 justify-between ml-[100px] mr-[100px] ">
                    
                    <CardS name="New Candidates" val="4 "/>
                    <CardS name="Today's Meetings" val="5"/>
                    <CardS name="Pending jobs" val="3"/>
                    <CardS name="New Applications" val="10"/>
                    
                </div> 

            </div>
            <div className="middle flex flex-row pl-[30px] pr-[30px] justify-between bg-transparent">
               
               <div className="meetings scrollable-content mt-8 w-[450px] h-[350px] overflow-auto bg-[linear-gradient(to_bottom,_#2b2b2b1a_10%,_#1a1a1a_100%)] p-4 rounded-[20px]"> 
                   <h1 className='text-[#ffffff] text-[1.2rem] mb-2'>Today's Meeting</h1>
                   <Meeting />
                   <Meeting />
                   <Meeting />
                   <Meeting />
                   <Meeting />
                   <Meeting />
                   <Meeting />
                   <Meeting />
                   <Meeting />
                   <Meeting />
               </div>
           
          
           <div className="Jobs scrollable-content mt-8 w-[450px] h-[350px] overflow-auto bg-[linear-gradient(to_bottom,_#2b2b2b1a_10%,_#1a1a1a_100%)] p-4 rounded-[20px]">
                   <h1 className='text-[#ffffff] text-[1.2rem] mb-2'>Jobs</h1>
                   <Jobs />
                   <Jobs />
                   <Jobs />
                   <Jobs />
                   <Jobs />
                   <Jobs />
                   <Jobs />
                   <Jobs />
                   <Jobs />
               </div>

              
           </div>

        </div>
        </div>
        </div>
        
    </div>
  )
}
