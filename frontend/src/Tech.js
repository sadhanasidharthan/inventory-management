import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

const RecordsTable = () => {
  const [records, setRecords] = useState([]);

  // Fetch records from the backend API
  useEffect(() => {
    fetchRecords();
  }, []);

  const fetchRecords = async () => {
    try {
      // Replace the URL with the actual backend API endpoint
      const response = await axios.get("http://127.0.0.1:8080/reqall");
      setRecords(response.data);
    } catch (error) {
      console.error("Error fetching records:", error);
    }
  };

  return (
    <div>
      <h2>Order List</h2>
      <div className="table-responsive">
        <table className="table table-bordered table-hover">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Order product</th>
              <th>Model Name</th>
              <th>Order Type</th>
              <th>Order Address</th>
              <th>Contact Number</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Tech Name</th>
              <th>Tech Contact Number</th>
            </tr>
          </thead>
          <tbody>
            {records.map((record) => (
              <tr key={record.requestId}>
                <td>{record.requestId}</td>
                <td>{record.model}</td>
                <td>{record.modelName}</td>
                <td>{record.serviceType}</td>
                <td>{record.address}</td>
                <td>{record.contactNumber}</td>
                <td>{record.firstName}</td>
                <td>{record.lastName}</td>
                <td>{record.techName}</td>
                <td>{record.techContactNumber}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecordsTable;