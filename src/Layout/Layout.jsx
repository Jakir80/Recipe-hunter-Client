/* eslint-disable no-unused-vars */
import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Menubar from '../Routs/Menubar';
import './layout.css';
const Layout = () => {
    return (
      <>
            <Menubar></Menubar>
        <div className='container'>
            <div className='outlet'><Outlet /></div>
        </div>
            <Footer />
      </>
    );
};

export default Layout;