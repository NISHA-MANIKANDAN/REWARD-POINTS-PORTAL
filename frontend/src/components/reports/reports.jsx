import React, { useState } from "react";
import VerticalNavbar from '../navbar/navbar.jsx';
import TopBar from '../topbar/topbar.jsx';



function Reports() {
    // Mock data
    const data = [
      // Sample data objects here
    ];
  
    // Pagination state
    const [currentPage, setCurrentPage] = React.useState(1);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
  
    // Calculate total pages
    const totalPages = Math.ceil(data.length / rowsPerPage);
  
    // Pagination logic
    const indexOfLastRow = currentPage * rowsPerPage;
    const indexOfFirstRow = indexOfLastRow - rowsPerPage;
    const currentRows = data.slice(indexOfFirstRow, indexOfLastRow);
  
    return (
      <div className="container">
        <VerticalNavbar />
        <div className="rightcontainer">
          <TopBar />
  
          <div className="body">
            <div style={{ marginBottom: '10px' }}>{/* Notification box */}</div>
            <div
              style={{
                marginTop: '50px',
                marginBottom: '20px',
                backgroundColor: '#FFFFFF',
                borderRadius: '10px',
                boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
                padding: '20px',
                paddingRight: '10px',
              }}
            >
              {/* Points Collector Table */}
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  marginBottom: '20px',
                }}
              >
                <input
                  type="text"
                  placeholder="Search by Activity Code"
                  style={{
                    marginRight: '10px',
                    padding: '5px',
                    borderRadius: '5px',
                    background: '#F4F7FE',
                    color: '#2B3674',
                  }}
                />
                <input
                  type="text"
                  placeholder="Search by Activity Name"
                  style={{
                    marginRight: '10px',
                    padding: '5px',
                    borderRadius: '5px',
                    background: '#F4F7FE',
                    color: '#2B3674',
                  }}
                />
                <select
                  style={{
                    padding: '5px',
                    borderRadius: '5px',
                    background: '#F4F7FE',
                  }}
                >
                  <option value="" style={{ color: '#2B3674' }}>
                    Sort by Category
                  </option>
                  {/* Add options for sorting */}
                </select>
              </div>
              <div
                style={{
                  overflowX: 'auto',
                  marginLeft: '20px',
                  marginRight: '20px',
                  borderColor: 'black',
                }}
              >
                <table
                  style={{
                    borderCollapse: 'collapse',
                    width: '100%',
                    borderRadius: '20px',
                    overflow: 'hidden',
                    background: '#F4F7FE',
                  }}
                >
                  {/* Table headers */}
                  <thead>
                    <tr>
                      <th
                        style={{
                          textAlign: 'center',
                          padding: '10px',
                          color: '#2B3674',
                        }}
                      >
                        S.No
                      </th>
                      <th
                  style={{
                    textAlign: "center",
                    padding: "20px",
                    color: "#2B3674",
                  }}
                >
                  Date
                </th>
                <th
                  style={{
                    textAlign: "center",
                    padding: "10px",
                    color: "#2B3674",
                  }}
                >
                  Activity Code
                </th>
                <th
                  style={{
                    textAlign: "center",
                    padding: "10px",
                    color: "#2B3674",
                  }}
                >
                  Activity Name
                </th>
                <th
                  style={{
                    textAlign: "center",
                    padding: "10px",
                    color: "#2B3674",
                  }}
                >
                  Activity Type
                </th>
                <th
                  style={{
                    textAlign: "center",
                    padding: "10px",
                    color: "#2B3674",
                  }}
                >
                  Activity Category
                </th>
                <th
                  style={{
                    textAlign: "center",
                    padding: "10px",
                    color: "#2B3674",
                  }}
                >
                  Status
                </th>
                <th
                  style={{
                    textAlign: "center",
                    padding: "10px",
                    color: "#2B3674",
                  }}
                >
                  Action
                </th>
                      {/* Add other table headers */}
                    </tr>
                  </thead>
                  {/* Table body */}
                  <tbody>
                    {currentRows.map((row, index) => (
                      <tr key={row.id}>
                        <td
                          style={{
                            textAlign: 'center',
                            padding: '10px',
                            color: '#2B3674',
                          }}
                        >
                          {indexOfFirstRow + index + 1}
                        </td>
                        <td
                    style={{
                      textAlign: "center",
                      padding: "10px",
                      color: "#2B3674",
                    }}
                  >
                    {row.date}
                  </td>
                  <td
                    style={{
                      textAlign: "center",
                      padding: "10px",
                      color: "#2B3674",
                    }}
                  >
                    {row.activityCode}
                  </td>
                  <td
                    style={{
                      textAlign: "center",
                      padding: "10px",
                      color: "#2B3674",
                    }}
                  >
                    {row.activityName}
                  </td>
                  <td
                    style={{
                      textAlign: "center",
                      padding: "10px",
                      color: "#2B3674",
                    }}
                  >
                    {row.activityType}
                  </td>
                  <td
                    style={{
                      textAlign: "center",
                      padding: "20px",
                      color: "#2B3674",
                    }}td
                  >
                    {row.activityCategory}
                  </td>
                  <td
                    style={{
                      textAlign: "center",
                      padding: "10px",
                      color: "#2B3674",
                    }}
                  >
                    {row.status}
                  </td>
                  <td
                    style={{
                      textAlign: "center",
                      padding: "10px",
                      color: "#2B3674",
                    }}
                  >
                    {row.action}
                  </td>
                        {/* Render other table data */}
                      </tr>
                    ))}
                  </tbody>
                  {/* Pagination */}
                  <tfoot>
                    <tr>
                      <td
                        colSpan="8"
                        style={{
                          textAlign: 'left',
                          borderTop: '1px solid #dddddd',
                          padding: '20px',
                          color: '#2B3674',
                        }}
                      >
                        Page {currentPage} of {totalPages}
                      </td>
                      <td
                        colSpan="1"
                        style={{
                          textAlign: 'right',
                          borderTop: '1px solid #dddddd',
                          padding: '10px',
                          color: '#2B3674',
                        }}
                      >
                        Rows per page:
                        <select
                          onChange={(e) =>
                            setRowsPerPage(parseInt(e.target.value))
                          }
                          style={{ borderRadius: '5px', background: '#F4F7FE' }}
                        >
                          <option value="10">10</option>
                          <option value="50">50</option>
                          <option value="100">100</option>
                        </select>
                      </td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Reports;