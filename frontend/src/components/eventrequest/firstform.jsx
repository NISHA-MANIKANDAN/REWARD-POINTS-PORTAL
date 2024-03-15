import React from "react";
import { useState } from "react";
import Select from 'react-select';
import './form.css';
import axios from "axios";
function FirstForm({ formData, setFormData }) {
   axios.get()
  
   const [selected, setselected]=useState(null)
   const handleChange = (value) => {
    setselected(value)
    console.log(value)
  };
  return (
    
    <div className="sign-up-container">
    < div className="leftform3">
    <label htmlFor="Faculty Name"> Name of the Faculty<span className="Asterisk">*</span> </label>
  <input
    type="text"
    placeholder="ACBCD E"
    value={formData.Faculty_name}
    onChange={(event) =>
      setFormData({ ...formData, Faculty_name: event.target.value })
    }
    style={{
      width: '280%',
      padding: '5px',
      boxSizing: 'border-box',
      marginBottom:'3px',
      marginTop:'7px'
      
    }}
  />
  
    <label htmlFor=" FacultyId "> Faculty Id  <span className="Asterisk">*</span>  </label>
  <input
    type="text"
    id="FacultyId"
    placeholder="AB1000"
    value={formData.Faculty_id}
    onChange={(event) =>
      setFormData({ ...formData, Faculty_id: event.target.value })
    }
    style={{
      width: '280%',
      padding: '5px',
      boxSizing: 'border-box',
      marginBottom:'3px',
      marginTop:'7px'
      
    }}
  />
  
  <label htmlFor="Email"> E-Mail id <span className="Asterisk">*</span></label>
  <input
    type="text"
    placeholder="abcd@bitsathy.ac.in"
    value={formData.Email}
    onChange={(event) =>
      setFormData({ ...formData, Email: event.target.value })
    }
    style={{
      width: '280%',
      padding: '5px',
      boxSizing: 'border-box',
      marginBottom:'3px',
      marginTop:'7px'
      
    }}
    />
    <label htmlFor="Dept"> Department <span className="Asterisk">*</span></label>
    <Select
    options={options}
    value={selected}
    onChange={handleChange}
   />

   
  <input
    type="text"
    placeholder="XXXXX"
    value={formData.Dept}
    onChange={(event) =>
      setFormData({ ...formData, Dept: event.target.value })
    }
    style={{
      width: '280%',
      padding: '5px',
      boxSizing: 'border-box',
      marginBottom:'3px',
      marginTop:'7px'
      
    }}
    />
    
   
  </div>
  < div className="Rightform">
  <label htmlFor="salutation ">  Saluation <span className="Asterisk">*</span></label>
  <input
    type="text"
    placeholder="Select"
    value={formData.salutation}
    onChange={(event) =>
      setFormData({ ...formData, saluation: event.target.value })
    }
    style={{
      width: '300%',
      padding: '5px',
      boxSizing: 'border-box',
      marginBottom:'3px',
      marginTop:'7px'
      
    }}
  />
<label htmlFor="Designation "> Designation  </label>
  <input
    type="text"
    placeholder="Select"
    value={formData.Designation }
    onChange={(event) =>
      setFormData({ ...formData, Designation : event.target.value })
    }
    style={{
      width: '300%',
      padding: '5px',
      boxSizing: 'border-box',
      marginBottom:'3px',
      marginTop:'7px'
      
    }}
  />
  <label htmlFor="Mobile "> Mobile No </label>
  <input
    type="numbers"
    placeholder="+91 0000000000"
    value={formData.Mobile }
    onChange={(event) =>
      setFormData({ ...formData, Mobile: event.target.value })
    }style={{
      width: '300%',
      padding: '5px',
      boxSizing: 'border-box',
      marginBottom:'3px',
      marginTop:'7px'
      
    }}
  />
  
   

</div>
</div>


  );

}


export default FirstForm;
