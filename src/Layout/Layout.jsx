/* eslint-disable no-unused-vars */
import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Menubar from '../Routs/Menubar';

const Layout = () => {
    return (
        <div className='container'>
           <Menubar></Menubar> 
           <Outlet/>
           <Footer/>
        </div>
    );
};

export default Layout;