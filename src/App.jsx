import React from 'react';
import Login from './Login';
import Success from './success';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/success" element={<Success />} />
      </Routes>
  );
};

export default App;
