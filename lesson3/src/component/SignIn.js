import React from 'react';
import Button from './Button';
import Input from './Input';

export default function SignIn() {
    return (
        <div className="signIn">
            <h1>Sign up for an account</h1>
            <p>
                Signing up an account is free and easy. Fill out the form below to get started. JavaScript is required
                to continue
            </p>
            <Input />
            <p>
                By clicking the "Sign up" button below, I certify that I have read and agree to the TMDB terms of use
                and privacy policy
            </p>
            <Button />
        </div>
    );
}
