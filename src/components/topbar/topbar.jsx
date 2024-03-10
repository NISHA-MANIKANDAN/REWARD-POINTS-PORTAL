import React from 'react';
import '@fortawesome/fontawesome-free/css/all.css';  // Import Font Awesome styles
import './topbar.css';

const TopBar = () => {
  return (
    <div className="topbar">
      <div className='leftsection'>
        <h2>My Events</h2>
      </div>
      <div className='rightsection'>
        <div className='inputbox'>
          <i className="fas fa-search"></i>
          <input type="text" placeholder="Search" />
          <i className="fas fa-adjust"></i> {/* Replace bell icon with dark mode icon */}
        </div>
      </div>
    </div>
  );
};

export default TopBar;
