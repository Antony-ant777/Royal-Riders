import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/login.css';

function LoginPage() {
    const [emailOrMobile, setEmailOrMobile] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate(); 

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!emailOrMobile || !password) {
            setError('Enter your email and password.');
            return;
        }

        console.log('Form submitted:', { emailOrMobile, password });

        setEmailOrMobile('');
        setPassword('');
        setError('');
    };

    const handleGoogleLogin = () => {
        window.location.href = 'https://accounts.google.com/signin';
    };

    const handleFacebookLogin = () => {
        window.location.href = 'https://www.facebook.com/login/';
    };

    const handleCreateAccount = () => {
        navigate('CreatingAccountPage');
    };

    const handleForgotPassword = () => {
        navigate('/forgot-password');
    };

    return (
        <div className="login-page">
            <div className="login-box">
                <h2>Log in to your Royal Riders account</h2>
                {error && <p className="error-message">{error}</p>}
                <form onSubmit={handleSubmit}>
                    <label htmlFor="emailOrMobile" className="label">Email/Mobile Number</label>
                    <input
                        type="text"
                        id="emailOrMobile"
                        placeholder="Email/Mobile Number"
                        value={emailOrMobile}
                        onChange={(e) => setEmailOrMobile(e.target.value)}
                    />
                    <label htmlFor="password" className="label">Password</label>
                    <input
                        type="password"
                        id="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button type="submit" className="btn-login">Login</button>
                    <a href="#" className="link-forgot-password" onClick={handleForgotPassword}>Forgot Password?</a>
                </form>
                <div className="new-account">
                    <p>New to royalenfield.com?</p>
                    <button className="btn-create-account" onClick={handleCreateAccount}>Create an Account</button>
                </div>
                <div className="social-login">
                    <p>Or sign in via</p>
                    <button className="btn-social btn-facebook" onClick={handleFacebookLogin}>Sign in with Facebook</button>
                    <button className="btn-social btn-google" onClick={handleGoogleLogin}>Sign in with Google</button>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;
