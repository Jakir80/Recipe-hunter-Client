/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import ActiveLink from './ActiveLink';
const Menubar = () => {
  const { user, logOut } = useContext(AuthContext)
  const handleSignout = () => {
    logOut()
    .then()
    .catch(error=>{
      console.log(error.message)
    })
  }

  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home"><h3 className="fw-bold text-primary">Cooking Your Food</h3></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="m-auto">
              <ActiveLink to = '/'>Home</ActiveLink>
              <ActiveLink to = '/blog'>Blog</ActiveLink>
              <ActiveLink to = '/login'>Login</ActiveLink>
              <ActiveLink to = '/register'>Sign Up</ActiveLink>
            </Nav>
            <div>
                {
                    user ? <> <img title= {user?.displayName} className="rounded rounded-circle me-2" style={{width:'40px', height: '40px'}} src= {user?.photoURL} alt="" /> 
                    <button onClick={handleSignout} className="btn btn-outline-primary fw-semibold">Log Out</button> </> : <Link to = '/login'><button className="btn btn-outline-primary">Login</button></Link>
                }
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>

  );
};


{/* <Nav>
{user ? <span> <img src={user.photoURL} className='w-25 rounded rounded-circle' title={user.displayName} alt="" /><button className='btn btn primary' onClick={handleSignout}>Sign out</button></span> : <Link to="/login">Login</Link>}
</Nav> */}

export default Menubar;