import React from 'react';
import { useState } from 'react';

function TrafficLight() {
    const light = ['red', 'yellow', 'green'];
    const [lit, setLit] = useState('red');

    let changeLit = () => {
        if (lit === 'red') {
            setLit('green');
        } else if (lit === 'green') {
            setLit('yellow');
        } else {
            setLit('red');
        }
    };
    return (
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
            {light.map((color) => (
                <div
                    style={{
                        height: 10,
                        width: 10,
                        border: '1px solid',
                        borderRadius: '50%',
                        backgroundColor: color === lit ? color : 'white',
                    }}
                ></div>
            ))}
            <button onClick={changeLit}>Next</button>
        </div>
    );
}

export default TrafficLight;
