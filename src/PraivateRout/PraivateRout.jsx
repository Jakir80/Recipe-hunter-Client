/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { Spinner } from 'react-bootstrap';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
// import { AuthContext } from '../components/providers/AuthProvider';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    console.log(location)
    if(loading){
        return <Spinner animation="border" variant="primary" />
    }

    if (user) {
        return children;
    }

    return <Navigate to="/login" state={{from: location}} replace ></Navigate>;
};

export default PrivateRoute;