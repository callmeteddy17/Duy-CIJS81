import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Homepage from './component/homepage/Homepage';
import RegisterPage from './component/register/RegisterPage';

function App() {
    return (
        <div className="main">
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/register" element={<RegisterPage />} />
            </Routes>
        </div>
    );
}

export default App;
