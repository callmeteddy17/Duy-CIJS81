import React from 'react';

function Input(props) {
    return (
        <div className={`${props.className} input-box`}>
            <input name={props.className} type={props.type} placeholder={props.placeholder} />
            <label htmlFor={props.className} style={props.color}>
                {props.hint}
            </label>
        </div>
    );
}

export default Input;
