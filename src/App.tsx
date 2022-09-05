import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import Main from './pages/Main';
import Work from './pages/Work';
import Contacts from './pages/Contacts';
import Layout from './Layout';
import Portfolio from './pages/Portfolio';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="portfolio">
            <Route index element={<Portfolio />} />
            <Route path=":work" element={<Work />} />
          </Route>
          <Route path="contacts" element={<Contacts />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
