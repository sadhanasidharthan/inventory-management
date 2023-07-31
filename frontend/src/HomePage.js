import React, { useState } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import './HomePage.css';

const HomePage = () => {
  const [model, setModel] = useState('');
  const [modelName, setModelName] = useState('');
  const [serviceType, setServiceType] = useState('');
  const [address, setAddress] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleModelChange = (event) => {
    const selectedModel = event.target.value;
    setModel(selectedModel);
    setModelName('');
  };

  const handleModelNameChange = (event) => {
    setModelName(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    console.log('Model:', model);
    console.log('Model Name:', modelName);
    console.log('Service Type:', serviceType);
    console.log('Address:', address);
    console.log('Contact Number:', contactNumber);

    if (
      model &&
      modelName &&
      serviceType &&
      address &&
      contactNumber
    ) {
      // All fields are filled, display success message
      setSuccessMessage('Request Successful');

      const requestData = {
        model: model,
        modelName: modelName,
        serviceType: serviceType,
        address: address,
        contactNumber: contactNumber,
      };

      try {
        // Send POST request to store data in the database
        await axios.post('http://127.0.0.1:8080/add', requestData);
        console.log('Request sent successfully');
      } catch (error) {
        console.error('Failed to send request:', error);
      }
    } else {
      // Some fields are missing, display error message
      setErrorMessage('Request Unsuccessful');
    }
  };

  const modelNameOptions = () => {
    switch (model) {
      case 'Air Conditioners':
        return (
          <>
            <option value="">Select Model Name</option>
            <option value="Inverter AC">Inverter AC</option>
            <option value="Non-Inverter AC">Non-Inverter AC</option>
          </>
        );
      case 'Refrigerators':
        return (
          <>
            <option value="">Select Model Name</option>
            <option value="Side by Side Refrigerator">Side by Side Refrigerator</option>
            <option value="Top Freezer Refrigerator">Top Freezer Refrigerator</option>
            <option value="French Door Refrigerator">French Door Refrigerator</option>
            <option value="Bottom Freezer Refrigerator">Bottom Freezer Refrigerator</option>
            <option value="Counter Depth Refrigerator">Counter Depth Refrigerator</option>
            <option value="Smart refrigerator">Smart refrigerator</option>
            <option value="Mini Refrigerator">Mini Refrigerator</option>
            <option value="Minibar">Minibar</option>
          </>
        );
      case 'Washing Machines & Dryers':
        return (
          <>
            <option value="">Select Model Name</option>
            <option value="Front-load washing machine">Front-load washing machine</option>
            <option value="Top-load washing machine">Top-load washing machine</option>
            <option value="Ventless dryers">Ventless dryers</option>
            <option value="Condenser dryers">Condenser dryers</option>
            <option value="Heat pump dryers">Heat pump dryers</option>
            <option value="Standard vented dryers">Standard vented dryers</option>
          </>
        );
      case 'Dishwashers':
        return (
          <>
            <option value="">Select Model Name</option>
            <option value="Front Control Dishwasher">Front Control Dishwasher</option>
            <option value="Top Control Dishwasher">Top Control Dishwasher</option>
            <option value="Portable Dishwasher">Portable Dishwasher</option>
            <option value="Third Rack Dishwasher">Third Rack Dishwasher</option>
          </>
        );
      case 'Vacuum Cleaners':
        return (
          <>
            <option value="">Select Model Name</option>
            <option value="Upright Vacuum">Upright Vacuum</option>
            <option value="Handheld Vacuum">Handheld Vacuum</option>
            <option value="Cordless Vacuum">Cordless Vacuum</option>
            <option value="Robotic vacuum">Robotic vacuum</option>
            <option value="Stick Vacuum">Stick Vacuum</option>
            <option value="Wet/Dry Vacuum">Wet/Dry Vacuum</option>
            <option value="Backpack Vacuum">Backpack Vacuum</option>
          </>
        );
      default:
        return <option value="">Select Model Name</option>;
    }
  };

  return (
    <div className="home">
      <Navbar />
      <form className="home-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="model">Model:</label>
          <select id="model" value={model} onChange={handleModelChange}>
            <option value="">Select Model</option>
            <option value="Air Conditioners">Air Conditioners</option>
            <option value="Refrigerators">Refrigerators</option>
            <option value="Washing Machines & Dryers">Washing Machines & Dryers</option>
            <option value="Dishwashers">Dishwashers</option>
            <option value="Vacuum Cleaners">Vacuum Cleaners</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="modelName">Model Name:</label>
          <select
            id="modelName"
            value={modelName}
            onChange={handleModelNameChange}
          >
            {modelNameOptions()}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="serviceType">Service Type:</label>
          <select
            id="serviceType"
            value={serviceType}
            onChange={(event) => setServiceType(event.target.value)}
          >
            <option value="">Select Service Type</option>
            <option value="Installation">Installation</option>
            <option value="Repair">Repair</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            id="address"
            value={address}
            onChange={(event) => setAddress(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="contactNumber">Contact Number:</label>
          <input
            type="tel"
            id="contactNumber"
            value={contactNumber}
            onChange={(event) => setContactNumber(event.target.value)}
          />
        </div>

        <button type="submit">Request</button>
      </form>
      {successMessage && <p className="success-message">{successMessage}</p>}
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </div>
  );
};

export default HomePage;