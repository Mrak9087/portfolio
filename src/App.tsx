import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";


import Header from "./component/Header";
import Aside from "./component/Aside";
import Container from "./component/Container";
import Menu from "./component/Menu";
import Main from "./pages/Main";
import Work from "./pages/Work";
import Logo from "./component/Logo";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Container>
          {/* <Header /> */}
          <div className="wrapper">
            <Aside>
              <Logo />
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
