import React from 'react';

function ApplyTasks({ jobs }) {
    return (
        <ul>
            {jobs.map((job, index) => (
                <div style={{ display: 'flex' }}>
                    <input type={'radio'} />
                    <li style={{ listStyle: 'none', marginLeft: 10 }} key={index}>
                        {job}
                    </li>
                </div>
            ))}
        </ul>
    );
}

export default ApplyTasks;
