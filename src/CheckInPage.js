import React, { useState } from 'react';
import axios from 'axios';

const CheckInPage = () => {
  const [plateNumber, setPlateNumber] = useState('');
  const [message, setMessage] = useState('');

  const handleCheckIn = async () => {
    try {
      await axios.post('/api/vehicles/check-in', plateNumber);
      setMessage("Vehicle successfully checked in!");
    } catch (error) {
      setMessage("Vehicle with this plate number is already checked in.");
    }
  };

  return (
    <div>
      <h1>Check-In</h1>
      <input
        type="text"
        value={plateNumber}
        onChange={(e) => setPlateNumber(e.target.value)}
        placeholder="Enter Plate Number"
      />
      <button onClick={handleCheckIn}>Check-In</button>
      <p>{message}</p>
    </div>
  );
};

export default CheckInPage;
