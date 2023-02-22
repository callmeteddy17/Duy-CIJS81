import React from 'react';

export default function Input() {
    return (
        <div className="memInfo">
            <h3>Username</h3>
            <input></input>
            <h3>Password (4 characters minimum)</h3>
            <input type={'password'}></input>
            <h3>Password Confirm</h3>
            <input type={'password'}></input>
            <h3>Email</h3>
            <input type={'email'}></input>
        </div>
    );
}
