import React, { useState } from "react";
import FirstForm from "./firstform.jsx";
import SecondForm from "./secondform.jsx";
import ThirdForm from "./thirdform.jsx"; // Add this line
import FourthForm from "./fourthform.jsx";
import './form.css';

function Forms() {
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
              {/* Add your trash icon component here */}
              <i className="fas fa-trash"></i>
            </span>
            <span>Trash Request</span>
            
          </button>
        );
      } else {
        return (
          <button className="trashreqbutton">
            {/* Add your trash icon component here */}
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
                  console.log(formData);
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