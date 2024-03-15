import React from "react";
import { useState ,useEffect} from "react";
import Select from 'react-select';
import './form.css';
import config from '../utils/config.json'
import axios from "axios";
function FirstForm({ formData, setFormData }) {
  /////////////////////////////////////////////
  /////////////////////////////////////////////
  const [deptOptions, setDeptOptions] = useState([]);
  const [selectedDept, setSelectedDept] = useState(null);
  const [desigOptions, setDesigOptions] = useState([]);
  const [selectedDesig, setSelectedDesig] = useState(null);
  useEffect(() => {
    axios.get(`${config.apiUrl}departments`)
      .then(function(response){
        const fetchedOptions = response.data.map(department => ({
          value: department.name,
          label: department.name
        }));
        setDeptOptions(fetchedOptions);
      })
      .catch(error => {
        console.error('Error fetching departments:', error);
      });
  }, []); 
  // Empty dependency array to ensure it runs only once on component mount
  const handleDeptChange = (selectedDeptOption) => {
    setSelectedDept(selectedDeptOption);
    if (selectedDeptOption) {
      setFormData({ ...formData, dept: selectedDeptOption.value });
    }
  };
 useEffect(() => {
    axios.get(`${config.apiUrl}designations`)
      .then(function(response){
        const fetchedOptions = response.data.map(designation => ({
          value: designation.name,
          label: designation.name
        }));
        setDesigOptions(fetchedOptions);
      })
      .catch(error => {
        console.error('Error fetching departments:', error);
      });
  }, []); 

  const handleDesigChange = (selectedDesigOption) => {
    setSelectedDesig(selectedDesigOption);
    setFormData({ ...formData,Designation: selectedDesigOption.value }); 
  }

  //////////////////////////////////////////////
  ///////////////////////////////////
  /////////////////////////////////////
 

 
  //////////////////////////////////////
  //////////////////////////////////////
  const salutationOptions = [
  {value:"Mr.",label:"Mr."},
  {value:"Mrs.",label:"Mrs."},
  {value:"Ms.",label:"Ms."}
]
const [selectedSal, setSelectedSal] = useState(null);

  const handleSalChange = (selectedDesigOption) => {
    setSelectedSal(selectedDesigOption);
    setFormData({ ...formData,Salutation: selectedDesigOption.value }); 
  }
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
    options={deptOptions}
    value={selectedDept}
    onChange={handleDeptChange}
   />
  </div>
  < div className="Rightform">
  <label htmlFor="salutation ">  Saluation <span className="Asterisk">*</span></label>
  <Select
    options={salutationOptions}
    value={selectedSal}
    onChange={handleSalChange}
   />
<label htmlFor="Designation "> Designation  </label>
<Select
    options={desigOptions}
    value={selectedDesig}
    onChange={handleDesigChange}
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
