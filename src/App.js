import React from 'react';
import Navbar from './components/Navbar';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Map from './components/Map';



function App() {
  return (
    <div>
      <Navbar />
      <BrowserRouter>
      <Sidebar>
        <Routes>
        <Route path="/"  />
          <Route path="/" element={<Navbar />} />
          <Route path="/" element={<Navbar />} />
          <Route path="/" element={<Navbar />} />
          <Route path="/" element={<Navbar />} />
          <Route path="/" element={<Navbar />} />
          <Route path="/" element={<Navbar />} />
        </Routes>
        <div
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <div style={{ width: "100vw", height: "100vh" }}>
          <Map />
        </div>
      </div>
      </Sidebar>
    </BrowserRouter>
      
    </div>
  );
}

export default App;