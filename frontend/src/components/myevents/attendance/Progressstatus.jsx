import React from 'react';
import './Attendence.css';
//import imageSrc from '../images/image (5).jpg'; // Import the image
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

const Progressstatus = () => {
  return (
    <div className='progressstatus'>
      <div className='progressstatus-title'>
        <div className='progressstatus-image'>
          {/*<img src={imageSrc} alt="Event" /> {/* Use <img> tag */}
        </div>
        <div className='progressstatus-heading'>
          <p>AI TECHNOLOGY - FUTURE  OF INDUSTRIAL REVOLUTION</p>
        </div>
        <div className='progressstatus-eventcode'>
          <p>Event Code :2122_OD_GE_206</p>
        </div>
      </div>
      <div className='progressstatus-timeline'>
        <p>STATUS</p>
        <Timeline position="right">
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color="secondary"></TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>Event Approval Pending...</TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color="success"></TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>Faculty Approval</TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color="secondary"></TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>Student Registration</TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color="secondary"></TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>Attendance</TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color="success"></TimelineDot>
            </TimelineSeparator>
            <TimelineContent>Attendance Update</TimelineContent>
          </TimelineItem>
        </Timeline>
      </div>
    </div>
  );
};

export default Progressstatus;
