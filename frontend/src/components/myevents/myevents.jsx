import React, { useEffect, useState } from "react";
import VerticalNavbar from '../navbar/navbar.jsx';
import TopBar from '../topbar/topbar.jsx';
import Button from '@mui/material/Button';
import MyImage from './image.jpg';
import './eventrequest.css';
import Forms from "../eventrequest/forms.jsx";
import EventDetails from "./eventdetails.jsx";
import axios from "axios";
import config from "../utils/config.json"

 

// function EventCards(){
//   const [events, setEvents] = useState([]);
//   useEffect(() => {
//     const fetchEvents = async () => {
//       try {
//         const response = await axios.get(`${config.apiUrl}eventCard`);
//         setEvents(response.data); // Assuming the data is in response.data
//       } catch (error) {
//         console.error("Failed to fetch events:", error);
//       }
//     };

//     fetchEvents();
//  }, []);
//   return(
   

    
//   )
// }
function EventRequest() {
  const [isContentVisible, setIsContentVisible] = useState(true);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [events, setEvents] = useState([]);
 
  useEffect(() => {
     const fetchEvents = async () => {
       try {
         const response = await axios.get(`${config.apiUrl}eventCard`);
         setEvents(response.data); // Assuming the data is in response.data
       } catch (error) {
         console.error("Failed to fetch events:", error);
       }
     };
 
     fetchEvents();
  }, []);
 
  const eventRequested = () => {
     setIsContentVisible(false);
  };
 
  const handleFormSubmit = () => {
     setIsFormSubmitted(true);
  };
 
  return (
     <div className="container">
       <VerticalNavbar />
       <div className="rightcontainer">
         <TopBar />
 
         <div className="body">
           {isContentVisible ? (
             events.length > 0 ? (
               events.map((value, index) => (
                <div className="form-page">
                 <EventDetails key={index} name={value["name"]}  status={value["status"]}/>
                 </div>
               ))
             ) : (
               <div className="event-request">
                 <img src={MyImage} alt="pic" className="event-request-image" />
                 <div className="event-request-inner">
                  <Button onClick={eventRequested}>
                     Create Request
                  </Button>
                 </div>
               </div>
             )
           ) : (
             <div className="form-page">
               {isFormSubmitted ? (
                 events.map((value, index) => (
                  <EventDetails key={index} name={value["name"]} />
                 ))
               ) : (
                 <Forms onSubmit={handleFormSubmit} />
               )}
             </div>
           )}
         </div>
       </div>
     </div>
  );
 }
export default EventRequest;
