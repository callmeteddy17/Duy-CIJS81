import React from 'react';

function CountTasks({ jobs }) {
    return <h2 style={{ fontSize: 15, position: 'fixed', left: 10, bottom: 10 }}>{jobs.length} Tasks left</h2>;
}

export default CountTasks;
