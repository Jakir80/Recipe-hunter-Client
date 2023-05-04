/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
const Menubar = () => {
  const location = useLocation();
  const {user,logOut}=useContext(AuthContext)
  // console.log(user)
  const handleSignout =()=>{
    logOut()
  }
  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };
    return (
        <div>
      <Navbar bg="light" expand="lg"  className="justify-content-between p-4">
     <h2 className='fw-bold'>Cooking Your Food</h2>
      <Nav className="mx-auto">
        <Nav.Item>
          <Link to="/" className={`nav-link ${isActive('/home')}`}>
            Home
          </Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="/blog" className={`nav-link ${isActive('/blog')}`}>
            Blog
          </Link>
        </Nav.Item>
      </Nav>
      <Nav> 
   {user? <span> <img src={user.photoURL} className='w-25 rounded rounded-circle' title={user.displayName} alt="" /><button className='btn btn primary' onClick={handleSignout}>Sign out</button></span>: <Link to="/login">Login</Link> }
      </Nav>
    </Navbar>
    
        </div>
        
    );
};

export default Menubar;