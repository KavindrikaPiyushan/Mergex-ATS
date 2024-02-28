import pp from '../images/pp1.jpg';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import DashboardIc from '../images/icon/dashboard.ico';
import BagIc from '../images/icon/bag.ico';
import FeedbackIc from '../images/icon/feedback.ico';
import SelectionIc from '../images/icon/selection.ico';
import ReportIc from '../images/icon/report.ico';
import MessageIc from '../images/icon/message.ico';
import Logout from '../images/icon/logout.ico';


export default function Navbar(props) {
   
  const[isOpen ,setIsOpen] = useState(true);
  const toggle = () => setIsOpen (!isOpen);
  const menuItem=[
      {
          path:"/",
          name:"Dashboard",
          icon: <img src={DashboardIc}  />,
      },
      {
          path:"/job_approval",
          name:"Job Approval",
          icon:<img src={BagIc}  />,
      },
      {
          path:"/interview_feedback",
          name:"Interview Feedback",
          icon: <img src={FeedbackIc}  />,
      },
      {
          path:"/hiring_decision",
          name:"Hiring Decision",
          icon: <img src={SelectionIc}  />,
      },
      {
          path:"/reporting",
          name:"Reporting",
          icon: <img src={ReportIc}  />,
      },
      {
          path:"/message",
          name:"Message",
          icon: <img src={MessageIc}  />,
      }
  ] 

  return (
    <div className='navContainer  bg-[#2b2b2b] w-[20%] items-center h-screen'  >
      <div className='profPicCover text-center pt-[15px]'>
         <img src={pp} alt="" className='pp1 rounded-[50%] border-[2px] border-[solid] border-[#ffffff] w-[150px] h-[150px] m-auto' />
         <p className='pName m-[10px] mb-[0] text-[white]'>{props.name}</p>
         <p className='jobTitle text-[#ffffff] opacity-[30%]'>{props.post}</p>
      </div>
      <div className='menuList mt-5 mb-5 '>
         {
          menuItem.map((item,index)=>(
            <NavLink to={item.path} key={index} className='link flex flex-row gap-6  pl-10 pr-10 p-[10px]  text-[#ffffff] opacity-[60%] hover:bg-[#bababa17] hover:opacity-[100%] hover:text-[#ffffff] hover:[transition:all_0.5s]'  activeclassName='active '>
              <div className='icon w-[30px] h-[30px] '>{item.icon}</div>
              <div style={{display: isOpen ? "block" : "none"}} className="link_text text-[1rem] mt-[2px] ">{item.name}</div>
            </NavLink>
          ))
         }
      </div>
      <div className='logOutCover items-center text-center flex '>
      <div className='m-auto flex flex-row p-[10px] bg-[rgba(234,_113,_34,_0.53)] rounded-[15px] w-[140px] items-center justify-center gap-1.5 '>
      <img src={Logout} className='logoutIc w-[30px] h-[30px] ' alt=''/>
      <button className='logOut text-white '>Log Out</button></div>
      </div>
    </div>
  )
}
