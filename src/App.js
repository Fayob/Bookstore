import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Books from './pages/Books';
import Categories from './pages/Categories';
import Navbar from './component/Navbar';

import './App.css';

const App = () => (
  <div className="app_body">
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="*" element={<h1>Error...</h1>} />
      </Routes>
    </Router>
  </div>

);

export default App;
