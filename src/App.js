import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import HiringDecision from './pages/HiringDecision';
import InterviewFeedback from './pages/InterviewFeedback';
import JobApproval from './pages/JobApproval';
import Message from './pages/Message';
import Reporting from './pages/Reporting';
import './App.css';


export default function App() {
  return (
  
    <BrowserRouter>
      <Routes>
        <Route path='/' Component={Dashboard}></Route>
        <Route path='/hiring_decision' Component={HiringDecision}></Route>
        <Route path='/interview_feedback' Component={InterviewFeedback}></Route>
        <Route path='/job_approval' Component={JobApproval}></Route>
        <Route path='/message' Component={Message}></Route>
        <Route path='/reporting' Component={Reporting}></Route>
      </Routes>
    </BrowserRouter>
 
  )
}
