import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';

import Header from './component/Header';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Navigate to=""/>}/>
          <Route />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
