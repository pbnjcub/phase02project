import React, {useState, useEffect, useCallback} from 'react'
import {useLocation} from 'react-router-dom'

const NewAssignmentForm = () => {
    const [courses, setCourses] = useState([])
    const [teachers, setTeachers] = useState([])
    const [types, setTypes] = useState([])
    const [newAssignment, setNewAssignment] = useState({
        name: '',
        classTeacher: teachers[0].name,
        class: courses[0].name,
        missingAssignment: '',
        type: types[0],
        reason: ''
    })

    const location = useLocation()
    const selected = location.state
    
    useEffect(() => {
        fetch("http://localhost:3001/courses")
        .then(resp => resp.json())
        .then(data => setCourses(data))
    }, [])
    
    useEffect(() => {
        fetch("http://localhost:3001/teachers")
        .then(resp => resp.json())
        .then(data => setTeachers(data))
    }, [])

    useEffect(() => {
        fetch("http://localhost:3001/type")
        .then(resp => resp.json())
        .then(data => setTypes(data))
    }, [])


    const coursesList = courses.map(course => <option key={course.name} value={course.name}>{course.name}</option>) 
    
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
        console.log(e.target.class)
        const newAssignmentData = {
            name: {selected},
            classTeacher: newAssignment.classTeacher,
            class: newAssignment.class,
            missingAssignment: newAssignment.missingAssignment,
            type: newAssignment.type,
            reason: newAssignment.reason,
        }
        fetch("http://localhost:3001/assignments", {
            method: 'POST',
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify(newAssignmentData)
        })
        .then(resp => resp.json())
        .then(data => {
        })
    }

    return (
        <form className="NewAssignment" onSubmit={handleSubmit}>
          <label>
            Student Name: {selected}
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
      );
    }


export default NewAssignmentForm