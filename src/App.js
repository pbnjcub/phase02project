import React, { useState, useEffect } from 'react';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Assignments from './Assignments'
import Navigation from './Navigation'
import Home from './Home';
import ByStudent from './ByStudent'
import ByStudentDetail from './ByStudentDetail'
import NewAssignmentForm from './NewAssignmentForm'
import './css/materialize.min.css';



const App = () => {
    const [assignments, setAssignments] = useState([])
    const [students, setStudents] = useState([])
    const [selectedStudent, setSelectedStudent] = useState('')


    useEffect(() => {
        fetch("http://localhost:3001/assignments")
        .then(resp => resp.json())
        .then(data => setAssignments(data))
        }, [])
    
    useEffect(() => {
        fetch("http://localhost:3001/students")
        .then(resp => resp.json())
        .then(data => {
            setStudents(data)
            setSelectedStudent(data[0].name)
        })
    }, [])      
    
    function handleDeleteAssignment(deletedAssignment) {
        const updatedAssignmentsList = assignments.filter((assignment) => assignment.id !== deletedAssignment.id)
        setAssignments(updatedAssignmentsList)
    }

    function handleNewAssignments(newAssignments) {
        setAssignments([...assignments, newAssignments])
    }

    function handleUpdatedAssignments(updatedAssignment) {
        const updatedAssignmentsList = assignments.map((assignment) => {
            if(assignment.id === updatedAssignment.id) {
                return updatedAssignment
            } else {
                return assignment
            }})
        setAssignments(updatedAssignmentsList)
    }

    return (
        <Router>
            <div className="App">
                <Navigation />
                <Routes>
                    <Route exact path="/" element={<Home />}/>
                    <Route exact path="/assignments" element={<Assignments assignments={assignments} onUpdateAssignment={handleUpdatedAssignments} onDeleteAssignment={handleDeleteAssignment} />}/>
                    <Route exact path="/byStudent" element={<ByStudent students={students} assignments={assignments} selectedStudent={selectedStudent} setSelectedStudent={setSelectedStudent} onNewAssignment={handleNewAssignments} onUpdateAssignment={handleUpdatedAssignments}/>}/>
                    <Route path="/byStudent/:name" element={<ByStudentDetail  />}/>
                    <Route path="/assignments/new" element={<NewAssignmentForm  />}/>
                    {/* <Route exact path="/class" element={<Class />}/>
                    <Route exact path="/teacher" element={<Teacher />}/> */}
                </Routes>
            </div>
        </Router>

    )
}

export default App;