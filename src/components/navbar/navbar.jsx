import React, { useState, useEffect } from 'react';
import {  useLocation, useNavigate } from 'react-router-dom';
import './navbar.css';
import HomeIcon from '@mui/icons-material/Home';
import BarChartIcon from '@mui/icons-material/BarChart';
import EditNoteIcon from '@mui/icons-material/EditNote';
import { FaBars } from 'react-icons/fa';


const VerticalNavbar = () => {
  const [showtoggle, setshowtoogle] = useState(false);

  const [selectedField, setSelectedField] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleMenu = () => {
    setshowtoggle(!showtoggle);
  };

 

  

  const handleNavigate = (path) => {
    navigate(path);
    setSelectedField(null);
  };

  useEffect(() => {
   
    const currentPath = location.pathname.substring(1); 
    setSelectedField(currentPath || 'myevents');
  }, [location.pathname]);

  return (
    <div className="vertical-navbar">
        
        <h3 className='heading'>REWARD POINTS</h3> 
       
      <div className="toggle-icon" onClick={toggleMenu}>
        <FaBars />
      </div>
      <ul className={showtoggle ? 'nav-links show' : 'nav-links'}>


        <li className={selectedField === 'myevents' ? 'selected' : ''} 
        onClick={() => handleNavigate('/myevents')}>
          <HomeIcon style={{ marginRight: '10px' , color : '#2B3674'}} />
          <b>My events </b>
        </li>

        

        <li className={selectedField === 'eventrequest' ? 'selected' : ''}
        onClick={() => handleNavigate('/eventrequest')}>
          <BarChartIcon style={{ marginRight: '10px', color : '#2B3674' }} />
          <b>Event request</b>
        </li>

        =

        <li className={selectedField === 'reports' ? 'selected' : ''} 
        onClick={() => handleNavigate('/reports')}>
          <EditNoteIcon style={{ marginRight: '10px', color : '#2B3674' }} />
          <b>Reports</b>
        </li>

       
      </ul>
    </div>
  );
};

export default VerticalNavbar;


