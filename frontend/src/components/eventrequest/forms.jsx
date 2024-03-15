import React, { useState } from "react";
import FirstForm from "./firstform.jsx";
import SecondForm from "./secondform.jsx";
import ThirdForm from "./thirdform.jsx"; 
import FourthForm from "./fourthform.jsx";
import './form.css';
import axios from "axios";
import apiUrl from "../utils/apiUrl.js";
console.log(apiUrl)
function Forms({ onSubmit }) {
  
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
    username: "",
    nationality: "",
    other: "",
    facultyName: "",
    facultyDepartment: "",
    facultyPosition: "",
    Select_Type: "", // Add Select_Type field
    Category: "", // Add Category field
    mode: "", // Add mode field
    Activity: "", // Add Activity field
    Event_Name: "", // Add Event_Name field
    Details: "", // Add Details field
    Start_Date: "", // Add Start_Date field
    End_Date: "", // Add End_Date field
    Duration: "", // Add Duration field
    Number: "", // Add Number field
    Points: "", // Add Points field
    Document: null, // Add Document field
    ref_no: "", // Add ref_no field
    Act_code: "", // Add Act_code field
  });
  const FormTitles = ["FACULTY DETAILS", "EVENT DETAILS", "TRAINING DETAILS", "EVENT SUMMARY"];

  const PageDisplay = () => {
    switch (page) {
      case 0:
        return <FirstForm formData={formData} setFormData={setFormData} />;
      case 1:
        return <SecondForm formData={formData} setFormData={setFormData} />;
      case 2:
        return <ThirdForm formData={formData} setFormData={setFormData} />;
      case 3:
        return <FourthForm formData={formData} setFormData={setFormData} />;
      default:
        return null;
    }
    
    
  };

  const renderTrashRequestButton = () => {
    if (page === 0) {
      return (
        <button className="trashreqbutton">
          <span >
            <i className="fas fa-trash"></i>
          </span>
          <span>Trash Request</span>
        </button>
      );
    } else {
      return (
        <button className="trashreqbutton">
          <i className="fas fa-trash"></i>
        </button>
      );
    }
  };
  
  return (
    <div className="form">
      <div className="firstdiv">
        <div className="header">
          <h1>{FormTitles[page]}</h1>
        </div>
        <div className="progressbar">
          <div
            style={{
              width:
                page === 0
                  ? "25%"
                  : page === 1
                  ? "50%"
                  : page === 2
                  ? "75%"
                  : "100%",
            }}
          ></div>
        </div>
      </div>
      <h4 style={{ fontSize: '16px', color: '#333', marginLeft: '8px' ,marginTop:'2px'}}>NOTES</h4>
      <div className="notes">
        <p style={{ fontSize: '16px', color: '#333', marginLeft: '8px' ,marginTop:'5px',marginbottom:'2px'}}>
          1. THE FACULTY MEMBERS ARE REQUESTED TO SUBMIT THE PROPOSAL WITH
          THEIR BITSATHY MAIL ID ONLY (NO NEED TO SUBMIT THE HARD COPY OF THE
          PROPOSAL) <br />2. TYPE EVERYTHING IN CAPITAL LETTERS
        </p>
      </div>
      <div className="form-container">
        <div className="body">{PageDisplay()}</div>
        <div className="footer">
          {renderTrashRequestButton()}
          {page !== 0 && (
            <button className="prevbutton"
              disabled={page === 0}
              onClick={() => setPage((currPage) => currPage - 1)}
            >
              PREV
            </button>
          )}
          <button className="next-submit-button"
            onClick={() => {
              if (page === FormTitles.length - 1) {
                alert("FORM SUBMITTED");
                //post request to insert form data into database
                
                axios.post(`${apiUrl}/event/request`,formData)
                //post request ends
                onSubmit(); // Trigger the onSubmit function when the form is submitted
              } else {
                setPage((currPage) => currPage + 1);
              }
            }}
          >
            {page === FormTitles.length - 1 ? "Submit" : "Next"}
          </button>
        </div>
      </div>
      
    </div>
    
  );
  
}


export default Forms;
