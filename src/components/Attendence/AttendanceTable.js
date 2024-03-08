import React from 'react';

const AttendanceTable = ({ data }) => {
  return (
    <div className='attendencetabular'>
      <table>
        <thead>
          <tr>
            <th>S.No</th>
            <th>Roll No</th>
            <th>Name</th>
            <th>Department</th>
            <th>Year</th>
            <th>Attendance</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>{row.sno}</td>
              <td>{row.rollNo}</td>
              <td>{row.name}</td>
              <td>{row.department}</td>
              <td>{row.year}</td>
              
              
              <td>
                <span className={row.attendance === 'Present' ? 'present' : 'absent'}>
                  {row.attendance}
                </span>
              </td>
              <td><button className="view-button">View</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AttendanceTable;
