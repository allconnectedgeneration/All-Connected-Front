import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './pages/about/About';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<About />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
