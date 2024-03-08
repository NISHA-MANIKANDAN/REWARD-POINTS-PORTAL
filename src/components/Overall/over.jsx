import React from 'react';
import LoginForm from '../LoginForm/loginform.jsx';
import NavBar from '../SideBar/sidebar.jsx';
//import Event from '../Events/Event.jsx';
//import Attendence from '../Attendence/Attendence.js';
import './over.css'; 
const Fully = () => {
  return (
    <div className='fully'>
        <div className='leftside'>
        <NavBar />
        </div>
        <div className='rightside'>
            <div className='upside'>
            <LoginForm />

            </div>
         <div className='downside'>
            

            </div>
        </div>

    </div>
  );
};
export default Fully;
