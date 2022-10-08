import React, {useState, useEffect, useCallback} from 'react'
import {useLocation} from 'react-router-dom'

const NewAssignmentForm = ({selectedStudent}) => {
    // const location = useLocation()
    // const selected = location.state.selectedStudent
    // const setAssignments = location.state.onNewAssignments
    // function setAssignments(data) {
    //     const setNewAssignments = location.state.onNewAssignments

    
    const [courses, setCourses] = useState([])
    const [teachers, setTeachers] = useState([])
    const [types, setTypes] = useState([])
    const [selectedCourse, setSelectedCourse] = useState('')
    const [selectedTeacher, setSelectedTeacher] = useState('')
    const [selectedType, setSelectedType] = useState('')
    const [newAssignment, setNewAssignment] = useState({
        name: selectedStudent,
        classTeacher: selectedTeacher,
        class: selectedCourse,
        missingAssignment: '',
        type: selectedType,
        reason: '',
        turnedIn: false
    })

    
    useEffect(() => {
        fetch("http://localhost:3001/courses")
        .then(resp => resp.json())
        .then(data => {
            setCourses(data)
            setSelectedCourse(data[0])
        })
    }, [])

    useEffect(() => {
        fetch("http://localhost:3001/teachers")
        .then(resp => resp.json())
        .then(data => {
            setTeachers(data)
            setSelectedTeacher(data[0].name)
        })
    }, [])

    useEffect(() => {
        fetch("http://localhost:3001/type")
        .then(resp => resp.json())
        .then(data => {
            setTypes(data)
            setSelectedType(data[0])
        })
    }, [])


    const coursesList = courses.map(course => <option key={course} value={course}>{course}</option>) 
    
    const teacherList = teachers.map(teacher => <option key={teacher.name} value={teacher.name}>{teacher.name}</option>) 
    
    const typeList = types.map(type => <option key={type} value={type}>{type}</option>)
    
    function handleChange(e) {
        setNewAssignment({
            ...newAssignment,
            [e.target.name]: e.target.value,
        })
    }

    function handleSubmit(e) {
        e.preventDefault()
  
        const newAssignmentData = {
            name: selectedStudent,
            classTeacher: newAssignment.classTeacher,
            class: newAssignment.class,
            missingAssignment: newAssignment.missingAssignment,
            type: newAssignment.type,
            reason: newAssignment.reason,
            turnedIn: newAssignment.turnedIn,
        }

        fetch("http://localhost:3001/assignments", {
            method: 'POST',
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify(newAssignmentData)
        })
        .then(resp => resp.json())
        .then(data => console.log(data))
    }

    return (
        <div>
        <h3>Form to Submit a New Homework Trckr</h3>
        <form className="NewAssignment" onSubmit={handleSubmit}>
                <label>
                Student Name: {selectedStudent}
                </label>
                <br/>
                <label>
                Course:
                    <select
                        name="class"
                        value={newAssignment.class}
                        onChange={handleChange}
                    >
                        {coursesList}
                    </select>
                </label>
                <br/>
                <label>
                Teacher of Class:
                <select
                    name="classTeacher"
                    value={newAssignment.classTeacher}
                    onChange={handleChange}
                >
                    {teacherList}
                </select>
                </label>
                <br/>
                <label>
                Type of Assignment:
                        <select
                            name="type"
                            value={newAssignment.type}
                            onChange={handleChange}
                        >
                        {typeList}
                    </select>
                </label>
                <br/>
                <label>
                Name of Assignment:
                    <input
                        type='text'
                        name='missingAssignment'
                        value={newAssignment.missingAssignment}
                        onChange={handleChange}
                    />
                </label>
                <br/>
                <label>
                Reason you did not complete this assignment:
                    <input
                        type='text'
                        name='reason'
                        value={newAssignment.reason}
                        onChange={handleChange}
                    />
                </label>
                <br/>
                <button type="submit">Submit Trckr</button>
            </form>
        </div>
      );
    }


export default NewAssignmentForm