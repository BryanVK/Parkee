import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CheckInPage from './CheckInPage';
import CheckOutPage from './CheckOutPage';

const App = () => (
  <Router>
    <Routes>
      <Route path="/check-in" element={<CheckInPage />} />
      <Route path="/check-out" element={<CheckOutPage />} />
    </Routes>
  </Router>
);

export default App;
