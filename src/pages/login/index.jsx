import React, { useState } from 'react'
import './style.css'
import { useNavigate, Link } from 'react-router'
import { generateUniqueString } from '../../utils/util';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate()

    const handleLogin = () => {
        const users = JSON.parse(localStorage.getItem('users'));
        const user = users?.find(user => user?.email === email)
        if (!user) {
            alert('user with this email does not exist')
            return;
        }
        if (user?.password !== password) {
            alert('Incorrect password')
            return;
        }

        // Check if current time is less than expiry time
        const currentTime = new Date().getTime();
        if (currentTime < parseInt(user?.expiryTime, 10)) {
            user.authToken = generateUniqueString();
            user.expiryTime = new Date().getTime() + 2 * 60 * 60 * 1000;
        }

        localStorage.setItem('users', JSON.stringify(users)); // Simulate login
        localStorage.setItem('currentUser', JSON.stringify({ ...user }))
        navigate("/");
    };
    return (
        <div className="login-container">
            <div className="header">Login</div>
            <div className="form">
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" placeholder="Enter your email" onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" placeholder="Enter your password" onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button className="btn" onClick={handleLogin}>Login</button>
                <div className='account-confirm'>Don't have an Account?
                    <Link to="/signup">{` Signup`}</Link>
                </div>
            </div>
        </div>
    )
}

export default Login