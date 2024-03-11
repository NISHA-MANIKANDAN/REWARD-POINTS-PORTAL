import React from "react";
import './form.css';

function OtherInfo({ formData, setFormData }) {
  return (
    <div className="sign-up-container">
        <div div className="leftform">
        <label htmlFor="Ref no"> REFERENCE NUMBER <span className="Asterisk">*</span> </label>
      <input
        type="numbers"
        placeholder="Eg 2122_OD_GE_206"
        value={formData.ref_no}
        onChange={(event) =>
          setFormData({ ...formData, ref_no: event.target.value })
        }
        style={{
            width: '200%',
            padding: '5px',
            boxSizing: 'border-box',
            marginTop:'7px',
            marginBottom:'10px'
            
          }}
      />
      
        <label htmlFor="Activity code"> Serial Activity Code <span className="Asterisk">*</span>  </label>
      <input
        type="text"
        placeholder="Eg 2223_OD_1307"
        value={formData.Act_code}
        onChange={(event) =>
          setFormData({ ...formData, Act_code: event.target.value })
        }
        style={{
            width: '200%',
            padding: '5px',
            boxSizing: 'border-box',
            marginTop:'5px',
            marginBottom:'10px'
            
          }}
      />
      </div>
</div>
  );
}

export default OtherInfo;