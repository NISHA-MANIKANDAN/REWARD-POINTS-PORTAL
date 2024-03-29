import React, { useEffect, useState } from 'react';
import './Event.css';
import MyImage from './image.jpg';
import Attendance from "./attendance/Attendance.jsx";
import HorizontalStepper from "./timeline";
import { Link } from 'react-router-dom';

const EventDetails = ({ name, status,eventId }) => {
  const [showAttendance, setShowAttendance] = useState(false);
  const handleViewAttendanceClick = () => {
    setShowAttendance(true);
  };

  return (
    <div className='attendance-card'>
      {showAttendance ? (
        <div className='attendance'>
          <Attendance />
        </div>
      ) : (
        // Render the first wrap division when showAttendance is false
        <div className='hello'>
          <div className='wrap'>
            <div className='wrap1'>
              <div className='box'>
                <div className='image'>
                  <img src={MyImage} alt="pic" className="event-request-image" style={{ width: '100%', height: '100%' }} />
                </div>
                <div className='title'>
                  {name}
                  {/* Use Link component to navigate to the attendance page */}
                  <div className='attendance-link'>
                  <Link onClick={handleViewAttendanceClick}>View Attendance</Link>
                  </div>
                </div>
                <div className='timeline'>
                  <HorizontalStepper eventId={eventId} />
                </div>
                <div className='status'>{status}</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EventDetails;