import React from 'react';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Assignments from './Assignments'
import Navigation from './Navigation'
import Home from './Home';
import NewAssignmentForm from './NewAssignmentForm'
import './App.css';

const App = () => {
    return (
        <Router>
            <div className="App">
                <Navigation />
                <Routes>
                    <Route exact path="/" element={<Home />}/>
                    <Route exact path="/assignments" element={<Assignments />}/>
                    <Route path="/assignments/new" element={<NewAssignmentForm/>}/>
                    {/* <Route exact path="/class" element={<Class />}/>
                    <Route exact path="/teacher" element={<Teacher />}/> */}
                </Routes>
            </div>
        </Router>

    )
}

export default App;