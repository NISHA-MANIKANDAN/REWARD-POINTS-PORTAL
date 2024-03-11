import React from "react";
import './form.css'

function SecondForm({ formData, setFormData }) {
  
    return (
      <div className="sign-up-container">
          < div className="leftform">
          <label htmlFor="Event_type"> Type of Event <span className="Asterisk">*</span></label>
        <input
          type="text"
          placeholder="Select Type"
          value={formData.Select_Type}
          onChange={(event) =>
            setFormData({ ...formData, Select_type: event.target.value })
          }
          style={{
            width: '100%',
            padding: '5px',
            boxSizing: 'border-box',
            marginBottom:'3px',
            marginTop:'5px'
            
          }}
        />
         
        
        <label htmlFor="Sub_Category"> Sub Category <span className="Asterisk">*</span></label>
        <input
          type="text"
          placeholder="Select Category"
          value={formData.Category}
          onChange={(event) =>
            setFormData({ ...formData, Category: event.target.value })
          }
          style={{
            width: '100%',
            padding: '5px',
            boxSizing: 'border-box',
            marginBottom:'2px',
            marginTop:'5px'
            
          }}
          />
          <p style={{ fontSize: '16px', color: '#333', marginTop: '2px' }}> If any of the club name is not available in the list' Kindly contact Rewards Team </p>
          <label htmlFor="Event_mode"> Mode of the Event<span className="Asterisk">*</span> </label>
        <input
          type="text"
          placeholder="Online"
          value={formData.mode}
          onChange={(event) =>
            setFormData({ ...formData, mode: event.target.value })
          }
          style={{
            width: '100%',
            padding: '5px',
            boxSizing: 'border-box',
            marginBottom:'2px',
            marginTop:'5px'
            
          }}
        />
          <label htmlFor="Activity_category"> Activity Category <span className="Asterisk">*</span></label>
        <input
          type="text"
          placeholder="Select Category"
          value={formData.Activity}
          onChange={(event) =>
            setFormData({ ...formData, Activity: event.target.value })
          }style={{
            width: '100%',
            padding: '5px',
            boxSizing: 'border-box',
            marginBottom:'2px',
            marginTop:'5px'
            
          }}
        />
        </div>
        < div className="Rightform">
        <label htmlFor="Event_name"> Name of the Event <span className="Asterisk">*</span></label>
        <input
          type="text"
          placeholder="AI TECHNOLOGY - FUTURE OF INDUSTRIAL REVOLUTION"
          value={formData.Event_Name}
          onChange={(event) =>
            setFormData({ ...formData, Event_Name: event.target.value })
          }
          style={{
            width: '100%',
            padding: '5px',
            boxSizing: 'border-box',
            marginTop:'5px'
            
          }}
        />
        <p style={{ fontSize: '16px', color: '#333', marginTop: '2px' }}>Kindly mention the Name of the clubs / Department associations along with the <br /> event name  </p>
        <label htmlFor="Details"> Details about the Expert </label>
        <input
          type="text"
          placeholder="Default Text"
          value={formData.Details}
          onChange={(event) =>
            setFormData({ ...formData, Details: event.target.value })
          }
          style={{
            width: '100%',
            
            padding: '5px 60px 20px 5px',
            boxSizing: 'border-box',
            marginTop:'5px'
  
            
          }}
        />
        <p style={{ fontSize: '16px', color: '#333', marginTop: '2px' }}>
          (THIS IS ONLY FOR QUEST LECTURE)
        </p>
      </div>
      </div>
    );
  }

export default SecondForm;