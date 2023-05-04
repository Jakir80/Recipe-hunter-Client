/* eslint-disable no-unused-vars */
import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Menubar from '../Routs/Menubar';
import './layout.css';
const Layout = () => {
    return (
        <div className='container'>
            <Menubar></Menubar>
            <div className='outlet'><Outlet /></div>
            <Footer />
        </div>
    );
};

export default Layout;