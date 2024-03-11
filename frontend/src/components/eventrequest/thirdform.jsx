import React from "react";
import './form.css';

function ThirdForm({ formData, setFormData }) {
  return (
    <div className="sign-up-container">
      <div className="leftform3">
        <label htmlFor=""> Start Date & Time <span className="Asterisk">*</span> </label>
        <input
          type="text"
          placeholder="YYYY-MM-DD --:--"
          value={formData.Start_Date}
          onChange={(event) =>
            setFormData({ ...formData, Start_Date: event.target.value })
          }
          style={{
            width: '200%',
            padding: '5px',
            boxSizing: 'border-box',
            marginBottom:'3px',
            marginTop:'7px'
            
          }}
        />

        <label htmlFor=""> End Date & Time <span className="Asterisk">*</span>  </label>
        <input
          type="text"
          placeholder="YYYY-MM-DD --:--"
          value={formData.End_Date}
          onChange={(event) =>
            setFormData({ ...formData, End_Date: event.target.value })
          }
          style={{
            width: '200%',
            padding: '5px',
            boxSizing: 'border-box',
            marginBottom:'3px',
            marginTop:'7px'
            
          }}
        />

        <label htmlFor="Duration"> Duration <span className="Asterisk">*</span></label>
        <input
          type="number"
          placeholder="00"
          value={formData.Duration}
          onChange={(event) =>
            setFormData({ ...formData, Duration: event.target.value })
          }
          style={{
            width: '200%',
            padding: '5px',
            boxSizing: 'border-box',
            marginBottom:'3px',
            marginTop:'7px'
            
          }}
        />
        <p style={{ fontSize: '16px', color: '#333', marginTop: '2px' }}>DURATION (in hours)</p>
      </div>

      <div className="Rightform">
        <label htmlFor="Number"> NUMBER OF STUDENTS EXPECTED  <span className="Asterisk">*</span></label>
        <input
          type="number"
          placeholder="+91 0000000000"
          value={formData.Number}
          onChange={(event) =>
            setFormData({ ...formData, Number: event.target.value })
          }
          style={{
            width: '100%',
            padding: '5px',
            boxSizing: 'border-box',
            marginBottom:'3px',
            marginTop:'5px'
            
          }}
        />
        <label htmlFor="Points"> Maximum Points  </label>
        <input
          type="number"
          placeholder="0000"
          value={formData.Points}
          onChange={(event) =>
            setFormData({ ...formData, Points: event.target.value })
          }
          style={{
            width: '100%',
            padding: '5px',
            boxSizing: 'border-box',
            marginBottom:'3px',
            marginTop:'5px'
            
          }}
        />
        <label htmlFor="Document">Attach the Document</label>
        <input
          type="file"
          id="Document"
          onChange={(event) =>
            setFormData({ ...formData, Document: event.target.files[0] })
          }
          style={{
            width: '100%',
            padding: '5px',
            boxSizing: 'border-box',
            marginBottom:'2px',
            marginTop:'5px'
            
          }}
        />
        <p  style={{ fontSize: '16px', color: '#333', marginTop: '2px' }}>Attach the Detailed Description of the event and valuation criteria </p>
      </div>
    </div>
  );
}

export default ThirdForm;
