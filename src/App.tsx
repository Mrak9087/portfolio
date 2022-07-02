import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Aside from "./component/Aside";
import Container from "./component/Container";

import Header from "./component/Header";
import Menu from "./component/Menu";
import Main from "./pages/Main";
import Work from "./pages/Work";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Container>
          {/* <Header /> */}
          <div className="wrapper">
            <Aside>
              <Menu />
            </Aside>
            <Routes>
              <Route path="/" element={<Navigate to="/main" />} />
              <Route path="/main" element={<Main />} />
              <Route path="/work" element={<Work />} />
            </Routes>
          </div>
        </Container>
      </div>
    </BrowserRouter>
  );
}

export default App;
