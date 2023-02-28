import React from 'react';
import { useState } from 'react';
import ApplyTasks from './component/ApplyTasks';
import CountTasks from './component/CountTasks';
import Input from './component/Input';
import TrafficLight from './component/TrafficLight';

function App() {
    const [job, setJob] = useState('');
    const [jobs, setJobs] = useState([]);

    return (
        <div className="main">
            <TrafficLight />
            <Input job={job} setJob={setJob} setJobs={setJobs} />
            <ApplyTasks jobs={jobs} />
            <CountTasks jobs={jobs} />
        </div>
    );
}

export default App;
