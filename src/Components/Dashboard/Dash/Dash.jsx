import React from 'react';
import './Dash.css'
import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';
import { Outlet } from 'react-router-dom';
import Book1 from '../Books1/Book1';

function Dash() {
  return (
    <>
      <Navbar />
      <div className="dis">
        <Sidebar />
        <Outlet />
      </div>
      
    </>
  );
}

export default Dash;
