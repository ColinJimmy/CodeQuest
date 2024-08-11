import React, { useState } from 'react';
import axios from 'axios';
import './ForgotPassword.css'; // Importing the CSS file for styling

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/auth/forgot-password', { email });
            setMessage(response.data);
        } catch (error) {
            setMessage(error.response.data);
        }
    };

    return (
        <div className="forgot-password-container">
            <div className="forgot-password-box">
                <h2 className="forgot-password-title">Forgot Your Password?</h2>
                <p className="forgot-password-text">
                    Enter your email address below, and we'll send you a link to reset your password.
                </p>
                <form onSubmit={handleSubmit} className="forgot-password-form">
                    <input
                        type="email"
                        className="forgot-password-input"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        required
                    />
                    <button type="submit" className="forgot-password-button">
                        Reset Password
                    </button>
                </form>
                {message && <p className="forgot-password-message">{message}</p>}
            </div>
        </div>
    );
};

export default ForgotPassword;
