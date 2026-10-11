import React from 'react';
import Header from '../Header/Header';
import LowerHeader from '../Header/LowerHeader';

import './Layout.css';

function Layout({ children }) {
  return (
    <div>
      <div className="sticky__header">
        <Header />
        <LowerHeader />
      </div>

      <main>{children}</main>
    </div>
  );
}

export default Layout;