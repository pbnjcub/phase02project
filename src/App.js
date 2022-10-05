import React from 'react';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import './App.css';

const App = () => {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route exact path="/" element={<Home />}/>
                    <Route exact path="/assignments" element={<Assignments />}>
                    <Route exact path="/" element={<Home />}></Route>
                    <Route exact path="/" element={<Home />}></Route>
                </Routes>
            </div>
        </Router>

    )
}

export default App;