import axios from 'axios';
import React, { useEffect, useState } from 'react';
import config from "../utils/config.json"
function HorizontalStepperBar({ currentStage, totalStages }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', overflow: 'hidden' }}>
      {[...Array(totalStages)].map((_, index) => {
        const stage = index + 1;
        if (index >= currentStage - 1 && index < currentStage + 2) {
          return (
            <div key={index} style={{ display: 'flex', alignItems: 'center', marginRight: '10px' }}>
              <div
                style={{
                  width: '30px',
                  height: '30px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: stage < currentStage ? '#4CAF50' : stage === currentStage ? '#1976d2' : '#bdbdbd',
                  color: 'white',
                  fontWeight: 'bold',
                }}
              >
                {stage}
              </div>
              {index < currentStage + 1 && index < totalStages - 1 && (
                <div
                  style={{
                    width: '70px',
                    height: '3px',
                    backgroundColor: stage < currentStage ? '#4CAF50' : stage === currentStage ? '#1976d2' : '#bdbdbd',
                    marginLeft: '5px',
                    marginRight:'0px'
                  }}
                ></div>
              )}
            </div>
          );
        }
        return null;
      })}
    </div>
  );
}

function HorizontalStepper({eventId}) {
  const [currentStage, setCurrentStage] = useState(0);
  const [totalStages, setTotalStages] = useState(0);

  useEffect(() => {
    // Fetch stages data from the backend
    fetchStagesFromBackend()
      .then(data => {
        setCurrentStage(data.currentStage);
        setTotalStages(data.totalStages);
      })
      .catch(error => console.error('Error fetching stages:', error));
  }, []);

  // Placeholder for the function to fetch stages from the backend
  const fetchStagesFromBackend = async () => {
    let status
    await axios.get(`${config.apiUrl}getStatus`,{
      params:{
        id:eventId
      }
    })
    .then((response)=>{
      status = response.data[0]["event_status"]
      
    })
    const stagesData = { currentStage: Number(status), totalStages: 8 }; // Example data
    return stagesData;
  };

  return (
    <div>
      <HorizontalStepperBar currentStage={currentStage} totalStages={totalStages} />
    </div>
  );
}

export default HorizontalStepper;