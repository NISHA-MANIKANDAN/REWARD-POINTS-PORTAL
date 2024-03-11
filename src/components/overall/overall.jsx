import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MyEvents from '../myevents/myevents.jsx';
import EventRequest from '../eventrequest/eventrequest.jsx';
import Reports from '../reports/reports.jsx';

const Fully = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<EventRequest />} />
        <Route path="/myevents" element={<MyEvents />} />
        <Route path="/eventrequest" element={<EventRequest />} />
        <Route path="/reports" element={<Reports />} />
        
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
};

export default Fully;

