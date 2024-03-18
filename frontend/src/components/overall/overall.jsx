import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MyEvents from '../myevents/myevents.jsx';
import EventRequest from '../eventrequest/eventrequest.jsx';
import Reports from '../reports/reports.jsx';
// Import the Attendance component

const Fully = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MyEvents />} />
        <Route path="/myevents" element={<MyEvents />} />
        <Route path="/eventrequest" element={<EventRequest />} />
        <Route path="/reports" element={<Reports />} />
         {/* Add the route for the Attendance component */}
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
};

export default Fully;
