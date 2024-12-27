import React, { useState } from 'react';
import axios from 'axios';

const CheckOutPage = () => {
  const [plateNumber, setPlateNumber] = useState('');
  const [ticketDetails, setTicketDetails] = useState(null);

  const handleCheckOut = async () => {
    try {
      const response = await axios.post('/api/vehicles/check-out', plateNumber);
      setTicketDetails(response.data);
    } catch (error) {
      setTicketDetails(null);
    }
  };

  return (
    <div>
      <h1>Check-Out</h1>
      <input
        type="text"
        value={plateNumber}
        onChange={(e) => setPlateNumber(e.target.value)}
        placeholder="Enter Plate Number"
      />
      <button onClick={handleCheckOut}>Check-Out</button>

      {ticketDetails && (
        <div>
          <p>Plate Number: {ticketDetails.plateNumber}</p>
          <p>Check-in Time: {ticketDetails.checkInTime}</p>
          <p>Check-out Time: {ticketDetails.checkOutTime}</p>
          <p>Total Price: {ticketDetails.totalPrice}</p>
        </div>
      )}
    </div>
  );
};

export default CheckOutPage;
