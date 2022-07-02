import React, { ReactNode } from "react";

import './aside.css';

interface IAside {
  children?: ReactNode;
}

const Aside = ({children}: IAside) => {
  return <div className="aside">
    {children}
  </div>;
};

export default Aside;
