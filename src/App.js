import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Games from './Games';

const NotFound = () => {
  return <h2>404 Not Found</h2>;
};

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Routes>
            <Route path="/games" element={<Games />} />
            <Route path="/" element={<div>Welcome to the Game Gallery</div>} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
