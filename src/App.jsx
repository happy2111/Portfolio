import React, { useState, useEffect } from 'react';
import Home from "./pages/Home/Home.jsx";
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";


// Main App Component
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;