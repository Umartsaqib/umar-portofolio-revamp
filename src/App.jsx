import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './contents/main'
import '../src/App.css'
import '../src/main.css'



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={< Main/>} />
      </Routes>
    </Router>
  );
}

export default App;

