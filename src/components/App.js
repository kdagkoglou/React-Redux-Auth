import React from 'react';
import './App.css';
import TopNav from './TopNav';

export default ({ children }) => {
  return (
    <div>
      <TopNav />
      {children}
    </div>
  );
};
