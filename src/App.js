// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Form from './components/Form';
import SuccessPage from './components/SuccessPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/success" element={<SuccessPage />} />
        <Route path="/" element={<Form />} />
      </Routes>
    </Router>
  );
};

export default App;
