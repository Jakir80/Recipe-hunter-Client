/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import './SignUp.css';
const SignUp = () => {
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('')
    const { createUser, googlesign, handlegithublogin } = useContext(AuthContext);
    const handlegooglesignin = () => {
        googlesign()
    }
    const gihublogin = () => {
        handlegithublogin()
    }

    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        console.log(email, password, confirm)
        form.reset();
        setError('');
        if (password !== confirm) {
            setError('Your password did not match')
            return
        }
        else if (password.length < 6) {
            setError('password must be 6 characters or longer')
            return
        }

        createUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                setSuccess("user created successfully")
            })
            .catch(error => {
                console.log(error);
                setError("cheeking error");
            })

    }

    return (
        <div className='form-container'>
            <h2 className='form-title'>Sign Up</h2>
            <form onSubmit={handleSignUp}>
                <div className="form-control">
                    <label htmlFor="text">Phot url</label>
                    <input type="text" name="photo" id="" required />
                </div>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="" required />
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="" required />
                </div>
                <div className="form-control">
                    <label htmlFor="confirm">Confirm Password</label>
                    <input type="password" name="confirm" id="" required />
                </div>
                <input className='btn-submit btn-outline-secondary btn mb-4' type="submit" value="Sign Up" />

            </form>
            <p><small>Already have an account? <Link to="/login">Login</Link></small>

            </p>
            <p>{success}</p>
            <button onClick={handlegooglesignin} className='btn btn-lg btn-outline-success m-2 font-bold'>sign in with google</button>
            <button onClick={gihublogin} className='btn btn-lg btn-outline-info '> sign in with github</button>
            <p className='text-error'>{error}</p>

        </div>
    );
};

export default SignUp;