import React from 'react';
import Header from '../homepage/Header';
import Register from './Register';
import './register.css';

function RegisterPage() {
    return (
        <div className="main-register">
            <Header />
            <Register />
        </div>
    );
}

export default RegisterPage;
