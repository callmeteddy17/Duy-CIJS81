import React from 'react';

function Input({ job, setJob, setJobs }) {
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            setJobs((prev) => [...prev, job]);
            setJob('');
        }
    };
    const setJobChange = (e) => {
        setJob(e.target.value);
    };
    return (
        <input
            type={'text'}
            placeholder={'Enter your task here ...'}
            value={job}
            onChange={setJobChange}
            onKeyDown={handleKeyDown}
        />
    );
}

export default Input;
