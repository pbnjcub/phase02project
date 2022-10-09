import React, { useState, useEffect } from 'react';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Assignments from './Assignments'
import Navigation from './Navigation'
import Home from './Home';
import ByStudent from './ByStudent'
import ByStudentDetail from './ByStudentDetail'
import NewAssignmentForm from './NewAssignmentForm'
import './App.css';

const App = () => {
    const [assignments, setAssignments] = useState([])

    useEffect(() => {
        fetch("http://localhost:3001/assignments")
        .then(resp => resp.json())
        .then(data => setAssignments(data))
        }, [])

    function handleNewAssignments(updatedAssignments) {
        setAssignments(updatedAssignments)
    }

    return (
        <Router>
            <div className="App">
                <Navigation assignments={assignments} onNewAssignments={handleNewAssignments} />
                <Routes>
                    <Route exact path="/" element={<Home />}/>
                    <Route exact path="/assignments" element={<Assignments />}/>
                    <Route exact path="/byStudent" element={<ByStudent />}/>
                    <Route exact path="/byStudent/:studentName" element={<ByStudentDetail/>} />
                    <Route path="/assignments/new" element={<NewAssignmentForm/>}/>
                    {/* <Route exact path="/class" element={<Class />}/>
                    <Route exact path="/teacher" element={<Teacher />}/> */}
                </Routes>
            </div>
        </Router>

    )
}

export default App;