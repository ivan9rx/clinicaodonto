// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';

import Cadastro from './pages/Cadastro';
import Login from './pages/Login';

const root = document.getElementById('root');

ReactDOM.createRoot(root).render(
  <Router>
    <div className="App">
      <Routes>
        <Route path="/" element={<Cadastro />} />
        <Route path="/Login" element={<Login/>}/>
      </Routes>
    </div>
  </Router>
);

