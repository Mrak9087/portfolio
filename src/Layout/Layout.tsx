import React from 'react';
import { Outlet } from 'react-router-dom';

import Aside from '../component/Aside';
import Container from '../component/Container';
import Logo from '../component/Logo';
import Menu from '../component/Menu';
import SwitcherTheme from '../component/SwitcherTheme';

const Layout = () => {
  return (
    <div className="App">
      <Container>
        <div className="wrapper">
          <Aside>
            <Logo />
            <Menu />
          </Aside>
          <Outlet />
        </div>
        <SwitcherTheme />
      </Container>
    </div>
  );
};

export default Layout;
