import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS

const RecordsTable = () => {
  const [records, setRecords] = useState([]);
  const [selectedRecord, setSelectedRecord] = useState(null);

  // Fetch records from the backend API
  useEffect(() => {
    fetchRecords();
  }, []);

  const fetchRecords = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8080/homeDataWithNames");
      // Add "techName" and "techContactNumber" properties to each record object
      const recordsWithTechInfo = response.data.map((record) => ({
        ...record,
        techName: "",
        techContactNumber: "",
      }));
      setRecords(recordsWithTechInfo);
    } catch (error) {
      console.error("Error fetching records:", error);
    }
  };

  const handleRowClick = (record) => {
    setSelectedRecord(record);
  };

  const handleTechNameChange = (recordIndex, value) => {
    setRecords((prevRecords) =>
      prevRecords.map((record, index) =>
        index === recordIndex ? { ...record, techName: value } : record
      )
    );
  };

  const handleTechContactNumberChange = (recordIndex, value) => {
    setRecords((prevRecords) =>
      prevRecords.map((record, index) =>
        index === recordIndex ? { ...record, techContactNumber: value } : record
      )
    );
  };

  const handlePostSelectedRecord = async () => {
    try {
      // Selected record will have the techName and techContactNumber properties
      const selectedTechRecord = records.find((record) => record.requestId === selectedRecord.requestId);
      await axios.post("http://127.0.0.1:8080/reqdetails", selectedTechRecord);
      alert("Selected record has been posted successfully!");
    } catch (error) {
      console.error("Error posting selected record:", error);
    }
  };

  return (
    <div>
      <h2>Records Table</h2>
      <div className="table-responsive">
        <table className="table table-bordered table-hover">
          <thead>
            <tr>
              <th>Request ID</th>
              <th>Model</th>
              <th>Model Name</th>
              {/* <th>Model Year</th> */}
              <th>Service Type</th>
              <th>Address</th>
              <th>Contact Number</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Tech Name</th>
              <th>Tech Contact Number</th>
            </tr>
          </thead>
          <tbody>
            {records.map((record, index) => (
              <tr key={record.requestId} onClick={() => handleRowClick(record)}>
                <td>{record.requestId}</td>
                <td>{record.model}</td>
                <td>{record.modelName}</td>
                <td>{record.modelYear}</td>
                <td>{record.serviceType}</td>
                <td>{record.address}</td>
                <td>{record.contactNumber}</td>
                <td>{record.firstName}</td>
                <td>{record.lastName}</td>
                <td>
                  <select
                    value={record.techName}
                    onChange={(e) => handleTechNameChange(index, e.target.value)}
                  >
                    <option value="">Select Tech Name</option>
                    <option value="Pradeep Kumar">Sadhanar</option>
                    <option value="Anand Patel">Tommy</option>
                    {/* Add more tech names as needed */}
                  </select>
                </td>
                <td>
                  <select
                    value={record.techContactNumber}
                    onChange={(e) => handleTechContactNumberChange(index, e.target.value)}
                  >
                    <option value="">Select Contact Number</option>
                    <option value="Pradeep Kumar: 9578786478">Sadhana: 7894561230</option>
                    <option value="Anand Patel: 9898787812">Tommy: 032654987</option>
                    {/* Add more contact numbers as needed */}
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {selectedRecord && (
        <div>
          <h2>Selected Record</h2>
          <p>Request ID: {selectedRecord.requestId}</p>
          <p>Model: {selectedRecord.model}</p>
          <p>Model Name: {selectedRecord.modelName}</p>
          <p>Model Year: {selectedRecord.modelYear}</p>
          <p>Service Type: {selectedRecord.serviceType}</p>
          <p>Address: {selectedRecord.address}</p>
          <p>Contact Number: {selectedRecord.contactNumber}</p>
          <p>First Name: {selectedRecord.firstName}</p>
          <p>Last Name: {selectedRecord.lastName}</p>

          <p>Tech Name: {selectedRecord.techName}</p>
          <p>Tech Contact Number: {selectedRecord.techContactNumber}</p>

          <button className="btn btn-primary" onClick={handlePostSelectedRecord}>
            Post Selected Record
          </button>
        </div>
      )}
    </div>
  );
};

export default RecordsTable;
