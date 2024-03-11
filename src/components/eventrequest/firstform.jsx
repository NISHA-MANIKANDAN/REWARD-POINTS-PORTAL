import React from "react";
import './form.css';

function FirstForm({ formData, setFormData }) {
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
  
    <label htmlFor=" Faculty Id "> Faculty Id  <span className="Asterisk">*</span>  </label>
  <input
    type="text"
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
  <label htmlFor="Saluation ">  Saluation <span className="Asterisk">*</span></label>
  <input
    type="text"
    placeholder="Select"
    value={formData.saluation}
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