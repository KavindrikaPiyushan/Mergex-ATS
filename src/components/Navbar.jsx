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
import { IoClose } from "react-icons/io5";
import { MdOutlineMenu } from "react-icons/md"; 



export default function Navbar(props) {

  const [isOpened, setIsOpened] = useState(true);

  const toggleDrawer = () => {
    setIsOpened(!isOpened);
  };
  console.log("isOpened from Topbar:",isOpened);
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

  return  (
  
   
      <div className={`navContainer  bg-[#2b2b2b]  items-center h-screen  esm:text-[0.7rem]  sm:text-[1rem] fixed lg:fixed
    ${
      isOpened ? ' z-10 w-[100px] esm:w-[210px] sm:w-[300px] lg:static lg:w-[20%]' : ' bg-transparent w-[0px] lg:w-[20%]  lg:bg-[#2b2b2b] start1450:h-screen '
    }`}
     >
      <div className={`text-center pr-[8px] z-50  absolute top-4 left-2 `}>
          <button
            className={`text-white  float-left border-[#EA7122] border-[2px] border-[solid] rounded-[5px]  block lg:hidden  ${
      isOpened ? 'text-white' : ' text-[#EA7122]'
    } `}
            type="button"
            aria-controls="drawer-navigation"
            data-drawer-target="drawer-navigation"
            data-drawer-show="drawer-navigation"
            onClick={toggleDrawer}
          >
          
            <MdOutlineMenu className={`w-[25px] h-[25px] hover:text-[#EA7122] hover:[transition:color_0.5s] hover:ease-in `} />
          </button>
        </div>

     <div className={` ${
  isOpened ? 'opacity-100 visible transition-opacity duration-200 ease-in' : 'opacity-0 invisible lg:opacity-100% lg:visible transition-opacity duration-200 ease-in'
}
`}>

     
      <div className='profPicCover text-center pt-[15px] sm:mt-[10px] '> 
     
         <img src={pp} alt="" className='pp1 rounded-[50%] border-[2px] border-[solid] border-[#ffffff] sm:w-[150px] sm:h-[150px] sm:m-auto esm:w-[100px] esm:h-[100px] esm:mt-[30px]  esm:m-auto ' />
         <p className='pName m-[10px] mb-[0] text-[white] esm:text-[0.8rem] sm:text-[1rem] '>{props.name}</p>
         <p className='jobTitle text-[#ffffff] opacity-[30%] esm:text-[0.8rem] sm:text-[1rem]'>{props.post}</p>
      </div>
      <div className='menuList mt-5 mb-5 '>
         {
          menuItem.map((item,index)=>(
            <NavLink to={item.path} key={index} className='link flex flex-row gap-6  pl-10 pr-10 p-[10px]  text-[#ffffff] opacity-[60%] hover:bg-[#bababa17] hover:opacity-[100%] hover:text-[#ffffff] hover:[transition:all_0.5s]'  activeclassName='active '>
              <div className='icon w-[30px] h-[30px] '>{item.icon}</div>
              <div  className="link_text text-[1rem] sm:text-[1rem] esm:text-[0.7rem] mt-[2px] ">{item.name}</div>
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
    </div>
    
  )
}