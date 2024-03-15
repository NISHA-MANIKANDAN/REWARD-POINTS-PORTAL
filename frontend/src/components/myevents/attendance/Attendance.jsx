import React, { useEffect } from 'react';
import './Attendence.css';
import AttendanceTable from './AttendanceTable';
import Progressstatus from './Progressstatus'; // Import the table component

const Attendance = () => {
  // Dummy data for the table
  const tableData = [
    { sno: '01', rollNo: '737622XAA000', name: 'Abcedfghijkl', department: 'ABC', year: 'First', attendance: 'Present' },
    { sno: '02', rollNo: '737622XAA000', name: 'Abcedfghijkl', department: 'BCE', year: 'First', attendance: 'Absent' },
    { sno: '01', rollNo: '737622XAA000', name: 'Abcedfghijkl', department: 'ABC', year: 'First', attendance: 'Present' },
    { sno: '02', rollNo: '737622XAA000', name: 'Abcedfghijkl', department: 'BCE', year: 'First', attendance: 'Absent' },
    { sno: '01', rollNo: '737622XAA000', name: 'Abcedfghijkl', department: 'ABC', year: 'First', attendance: 'Present' },
    { sno: '02', rollNo: '737622XAA000', name: 'Abcedfghijkl', department: 'BCE', year: 'First', attendance: 'Absent' },
    { sno: '01', rollNo: '737622XAA000', name: 'Abcedfghijkl', department: 'ABC', year: 'First', attendance: 'Present' },
    { sno: '02', rollNo: '737622XAA000', name: 'Abcedfghijkl', department: 'BCE', year: 'First', attendance: 'Absent' },
    { sno: '01', rollNo: '737622XAA000', name: 'Abcedfghijkl', department: 'ABC', year: 'First', attendance: 'Present' },
    { sno: '02', rollNo: '737622XAA000', name: 'Abcedfghijkl', department: 'BCE', year: 'First', attendance: 'Absent' },
    // Add more data as needed
  ];

  useEffect(() => {
    // Populate the dropdown with years from 2022 to 2026 and sort them
    const dropdown = document.getElementById("yearDropdown");
    const years = Array.from({ length: 5 }, (_, i) => 2022 + i);
    years.sort((a, b) => b - a); // Sort in descending order
    years.forEach(year => {
      const option = document.createElement("option");
      option.text = year;
      option.value = year;
      dropdown.add(option);
    });
  }, []); // Empty dependency array to ensure this effect runs only once

  return (
    <>
      <div className='attendencefully'>
        <div className='leftside2'>
          <div className='eventdetails'>
            <div className='heading2'>
              <h2>2122_OD_GE_206     ATTENDENCE</h2>
            </div>
            <div className='boxes'>
              <div className='inputbox'>
                <i className="fas fa-search"></i>
                <input type="text" placeholder="Search" />
              </div>
              <div className='dropdown'>
                <select id="yearDropdown" >
                  {/* Dropdown options go here */}
                </select>
              </div>
            </div>
          </div>
          {/* Use the AttendanceTable component here */}
          <AttendanceTable data={tableData} />
        </div>
        <div className='rightside2'>
          <div className='status'>
            <Progressstatus />
            {/* Your status content goes here */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Attendance;

