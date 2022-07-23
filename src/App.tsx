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
import SwitcherTheme from "./component/SwitcherTheme";
import Contacts from "./pages/Contacts";
import Layout from "./Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
            <Route index element={<Main />} />
            <Route path="work" element={<Work />} />
            <Route path="contacts" element={<Contacts />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
