import React, { useState } from "react";
import VerticalNavbar from '../navbar/navbar.jsx';
import TopBar from '../topbar/topbar.jsx';
import Button from '@mui/material/Button';
import MyImage from './image.jpg';
import './eventrequest.css';
import Forms from "../eventrequest/forms.jsx";
import EventDetails from "./eventdetails"; // Import your EventDetails component

function EventRequest() {
  const [isContentVisible, setIsContentVisible] = useState(true);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false); // New state

  const eventRequested = () => {
    setIsContentVisible(false);
    setIsFormSubmitted(false);
  };

  return (
    <div className="container">
      <VerticalNavbar />
      <div className="rightcontainer">
        <TopBar />

        <div className="body">
          {isContentVisible ? (
            <div className="event-request">
              <img src={MyImage} alt="My Image" className="event-request-image" />
              <div className="event-request-inner">
                <Button onClick={eventRequested}>
                  Create Request
                </Button>
              </div>
            </div>
          ) :(
            <div className="category-page">
              <Forms />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default EventRequest;
