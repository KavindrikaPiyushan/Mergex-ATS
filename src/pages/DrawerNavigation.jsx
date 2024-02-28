import React, { useState } from 'react';
import { MdOutlineMenu } from "react-icons/md"; 
import pp from '../images/pp1.jpg';
import { NavLink } from 'react-router-dom';
import DashboardIc from '../images/icon/dashboard.ico';
import BagIc from '../images/icon/bag.ico';
import FeedbackIc from '../images/icon/feedback.ico';
import SelectionIc from '../images/icon/selection.ico';
import ReportIc from '../images/icon/report.ico';
import MessageIc from '../images/icon/message.ico';
import Logout from '../images/icon/logout.ico';


export default function DrawerNavigation() {
  const [isOpend, setIsOpend] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };
   
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
     

    <>
      {/* Button to toggle the drawer */}

      

      
      <div className="text-center">
        <button
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 float-left"
          type="button"
          onClick={toggleDrawer}
          aria-controls="drawer-navigation"
          data-drawer-target="drawer-navigation"
          data-drawer-show="drawer-navigation"
        >
          <MdOutlineMenu />
        </button>
      </div>

      {/* Drawer component */}
      <div
        id="drawer-navigation"
        className={`fixed top-0 left-0 z-40 h-screen p-4 overflow-y-auto transition-transform ${
          isOpen ? '' : '-translate-x-full'
        } bg-white w-64 dark:bg-gray-800`}
        tabIndex="-1"
        aria-labelledby="drawer-navigation-label"
      >
        <h5 id="drawer-navigation-label" className="text-base font-semibold text-gray-500 uppercase dark:text-gray-400">
          Menu
        </h5>
        <button
          type="button"
          onClick={toggleDrawer}
          aria-controls="drawer-navigation"
          className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white"
        >
          <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            />
          </svg>
          <span className="sr-only">Close menu</span>
        </button>
        <div className="py-4 overflow-y-auto">
          {/* List of menu items */}
          {/* Replace this part with your menu items */}
        </div>
      </div>
    </>
  );
}
