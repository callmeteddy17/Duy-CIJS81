import React from 'react';

function SetInput({ label, ...inputProps }) {
    return (
        <>
            <h3>{label}</h3>
            <input {...inputProps} />
        </>
    );
}

export default function Input() {
    return (
        <div className="memInfo">
            <SetInput label="Username" type="text" />
            <SetInput label="Password (4 characters minimum)" type="password" />
            <SetInput label="Password Confirm" type="password" />
            <SetInput label="Email" type="email" />
        </div>
    );
}
