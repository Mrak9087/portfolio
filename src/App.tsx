import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";

import Header from "./component/Header";
import Main from "./pages/Main";
import Work from "./pages/Work";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Navigate to="/main" />} />
          <Route path="/main" element={<Main />}/>
          <Route path="/work" element={<Work />}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
