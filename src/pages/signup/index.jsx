import React, { useState } from 'react'
import './style.css'
import { useNavigate, Link } from 'react-router'
import { generateUniqueString } from '../../utils/util';

const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate()
    const handleSignup = () => {
        // Simulate account creation
        let users = JSON.parse(localStorage.getItem('users')) || [];
        const currentUser = {
            name,
            email,
            password,
            authToken: generateUniqueString(),
            expiryTime: new Date().getTime() + 2 * 60 * 60 * 1000 // 2 hours in milliseconds
        }
        if (users?.length) {
            const isUserExist = users?.findIndex(user => user.email === email)
            if (isUserExist !== -1) {
                alert('this user already exist');
                return;
            }

            users.push(currentUser)
        } else {
            users = [currentUser]
        }
        localStorage.setItem('users', JSON.stringify(users));

        alert("Account created successfully! Please log in.");
        navigate("/login");
    };
    return (
        <div className="signup-container">
            <div className="header">Sign Up</div>
            <div className="form">
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" placeholder="Enter your name" onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" placeholder="Enter your email" onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" placeholder="Enter your password" onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button className="btn" onClick={handleSignup}>Sign Up</button>
                <div>Already have an Account ?
                    <Link to={'/login'}>{` Login`}</Link>
                </div>
            </div>
        </div>
    )
}

export default Signup