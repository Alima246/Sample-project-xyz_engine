// TwoStepForm.js
import React, { useState } from 'react';
import './TwoStepForm.css';
import { useNavigate  } from 'react-router-dom';
import Papa from 'papaparse';

function TwoStepForm({setTableData}) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    projectName: '',
    projectDescription: '',
    client: '',
    contractor: '',
    file: '',
    max_x: '',
    min_x: '',
    max_y: '',
    min_y: '',
    max_z: '',
    min_z: '',
  });
 
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const nextStep = () => {
    setStep(2);
  };

  const previousStep = () => {
    setStep(1);
  };


const handleSubmit = (event) => {
  event.preventDefault();
 
  setTableData(formData)
  setFormData(formData); 
  navigate('/result');
};


function handleFileUpload(event) {
    const file = event.target.files[0];  
    Papa.parse(file, {
    complete: (result) => {
   
    const X=[]
    const Y=[]
    const Z=[]

    result.data.map((item,i)=>{
        if(item.X){
         X.push(item.X)
        }
        if(item.Y){
        Y.push(item.Y)
        }
        if(item.Z){
        Z.push(item.Z)
        }
    })
  // array sort
    const sortedX=X.slice().sort((a, b) => a - b);
    const sortedY=Y.slice().sort((a, b) => a - b);
    const sortedZ=Z.slice().sort((a, b) => a - b);
    const minX=sortedX[0]
    const maxX=sortedX[sortedX.length-1]
    const minY=sortedY[0]
    const maxY=sortedY[sortedY.length-1]
    const minZ=sortedZ[0]
    const maxZ=sortedZ[sortedZ.length-1]
    setFormData({
        projectName: formData.projectName,
        projectDescription: formData.projectDescription,
        client: formData.client,
        contractor: formData.contractor,
        file: event.target.files[0].name,
        max_x: maxX,
        min_x: minX,
        max_y: maxY,
        min_y: minY,
        max_z: maxZ,
        min_z: minZ,
    })
    
    },
    header: true, 
    });
    }
  return (
   
    <div className="form-container">
      <div className="form">
      {step === 1 && (
          <div className="step">
            <h2>Step 1</h2>
            <form onSubmit={nextStep}>
              <label htmlFor="projectName">Project Name:</label>
              <input
                type="text"
                id="projectName"
                name="projectName"
                value={formData.projectName}
                onChange={handleInputChange}
                required
              /><br/><br/>

              <label htmlFor="projectDescription">Project Description:</label>
              <input
                type="text"
                id="projectDescription"
                name="projectDescription"
                value={formData.projectDescription}
                onChange={handleInputChange}
                required
              /><br/><br/>

              <label htmlFor="client">Client:</label>
              <input
                type="text"
                id="client"
                name="client"
                value={formData.client}
                onChange={handleInputChange}
                required
              /><br/><br/>

              <label htmlFor="contractor">Contractor:</label>
              <input
                type="text"
                id="contractor"
                name="contractor"
                value={formData.contractor}
                onChange={handleInputChange}
                required
              /><br/><br/>

              <button type="submit">Next</button>
            </form>
          </div>
        )}

        {step === 2 && (
          <div className="step">
            <h2>Step 2</h2>
            <form onSubmit={handleSubmit}>
              {/* Display the completed Step 1 fields as non-editable */}
              <label htmlFor="projectName">Project Name:</label>
              <input
                type="text"
                id="projectName"
                name="projectName"
                value={formData.projectName}
                readOnly e
              /><br/>

              <label htmlFor="projectDescription">Project Description:</label>
              <input
                type="text"
                id="projectDescription"
                name="projectDescription"
                value={formData.projectDescription}
                readOnly 
              /><br/>

              <label htmlFor="client">Client:</label>
              <input
                type="text"
                id="client"
                name="client"
                value={formData.client}
                readOnly 
              /><br/>

              <label htmlFor="contractor">Contractor:</label>
              <input
                type="text"
                id="contractor"
                name="contractor"
                value={formData.contractor}
                readOnly 
              /><br/>

              {/* Remaining fields for Step 2 */}

              <label htmlFor="file">Upload File:</label>
              <input
                type="file"
                id="file"
                name="file"
                accept="text/csv"
                onChange={handleFileUpload}
              /><br/>

              <label htmlFor="max_x">max_X:</label>
              <input
                type="number"
                id="max_x"
                name="max_x"
                value={formData.max_x}
                onChange={handleInputChange}
                required
              /><br/>

              <label htmlFor="min_x">min_X:</label>
              <input
                type="number"
                id="min_x"
                name="min_x"
                value={formData.min_x}
                onChange={handleInputChange}
                required
              /><br/>

              <label htmlFor="max_y">max_Y:</label>
              <input
                type="number"
                id="max_y"
                name="max_y"
                value={formData.max_y}
                onChange={handleInputChange}
                required
              /><br/>

              <label htmlFor="min_y">min_Y:</label>
              <input
                type="number"
                id="min_y"
                name="min_y"
                value={formData.min_y}
                onChange={handleInputChange}
                required
              /><br/>

              <label htmlFor="max_z">max_Z:</label>
              <input
                type="number"
                id="max_z"
                name="max_z"
                value={formData.max_z}
                onChange={handleInputChange}
                required
              /><br/>

              <label htmlFor="min_z">min_Z:</label>
              <input
                type="number"
                id="min_z"
                name="min_z"
                value={formData.min_z}
                onChange={handleInputChange}
                required
              /><br/>

              <button type="button" onClick={previousStep}>Previous</button>
              <button type="submit">Submit</button>
            </form>
            
          </div>
        )}
      </div>
    </div>
    
  );
}

export default TwoStepForm;
