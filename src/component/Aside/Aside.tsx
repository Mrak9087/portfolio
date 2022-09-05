import React, { ReactNode } from 'react';

import './aside.css';

interface IAside {
  children?: ReactNode;
}

const Aside = ({ children }: IAside) => {
  return (
    <div className="aside">
      <div className="asideWrapper">{children}</div>
    </div>
  );
};

export default Aside;
