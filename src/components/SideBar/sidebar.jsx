import React, { useState } from 'react';
import './SideBar.css';
import HomeIcon from '@mui/icons-material/Home';
import BarChartIcon from '@mui/icons-material/BarChart';
import EditNoteIcon from '@mui/icons-material/EditNote';

const NavBar = () => {
  const [selectedLink, setSelectedLink] = useState(null);

  const handleLinkClick = (link) => {
    setSelectedLink(link);
    
  };

  return (
    <div className='corner'>
      <div className='heading'>
        <h3>REWARD POINTS</h3>
      </div>
      <div className='list'>
        <div className={`sidebar-link ${selectedLink === 'myEvents' ? 'active' : ''}`} onClick={() => handleLinkClick('myEvents')}>
          <HomeIcon style={{ marginRight: '10px' }}/>
          <a href="#">My Events</a>
        </div>
        <div className={`sidebar-link ${selectedLink === 'eventRequest' ? 'active' : ''}`} onClick={() => handleLinkClick('eventRequest')}>
          <BarChartIcon style={{ marginRight: '10px' , }} />
          <a href="#">Event request</a>
        </div>
        <div className={`sidebar-link ${selectedLink === 'reports' ? 'active' : ''}`} onClick={() => handleLinkClick('reports')}>
          <EditNoteIcon  style={{ marginRight: '10px' , }}/>
          <a href="#">Reports</a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
