import React, { useState } from 'react';
import './Contact.css';
import axios from 'axios';

const ContactUsForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform any necessary validation or data processing here
    // For this example, we'll simply log the values to the console
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);

    // Create an object with the data to be sent to the backend
    const formData = {
      name: name,
      email: email,
      message: message,
    };

    // Make a POST request to your backend endpoint using Axios
    axios.post('http://127.0.0.1:8080/submit', formData)
      .then((response) => {
        // Handle the response from the backend if needed
        console.log('Response from backend:', response.data);
      })
      .catch((error) => {
        // Handle any errors that occurred during the POST request
        console.error('Error posting data:', error);
      });

    // Clear the form fields after successful submission
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </label>
      <br />
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </label>
      <br />
      <label>
        Message:
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        /> 
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default ContactUsForm;
