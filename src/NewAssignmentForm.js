import React, {useState, useEffect} from 'react'
import './css/materialize.min.css';
import './App.css'

const NewAssignmentForm = ({selectedStudent, onNewAssignment, assignments}) => {
   
    const [courses, setCourses] = useState([])
    const [teachers, setTeachers] = useState([])
    const [types, setTypes] = useState([])
    const [selectedCourse, setSelectedCourse] = useState('English')
    const [selectedTeacher, setSelectedTeacher] = useState('(COLOR CLASS) Mr. Jung')
    const [selectedType, setSelectedType] = useState('Homework')
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
            // setSelectedCourse(data[0])
        })
    }, [])

    useEffect(() => {
        fetch("http://localhost:3001/teachers")
        .then(resp => resp.json())
        .then(data => {
            setTeachers(data)
            // setSelectedTeacher(data[0].name)
        })
    }, [])

    useEffect(() => {
        fetch("http://localhost:3001/type")
        .then(resp => resp.json())
        .then(data => {
            setTypes(data)
            // setSelectedType(data[0])
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
        .then(data => onNewAssignment(data))
    }

    return (
        <div style={{padding: 20}}>
            <hr />
            <h5>Form to Submit a New Homework Trckr</h5>
            <form className="col s12" onSubmit={handleSubmit}>
                <div className="row">
                    <label><h5>Student Name: <b>{selectedStudent}</b></h5></label>
                </div>
                <div className="row">
                    <div className="input-field col s6">
                        <label>Course</label>
                        <br/>
                        <select name="class" id="class" value={newAssignment.class} onChange={handleChange} className="browser-default">
                            {coursesList}
                        </select>

                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s6">
                        <label>Teacher of Class</label>
                        <br/>
                        <select name="classTeacher" id="classTeacher" value={newAssignment.classTeacher} onChange={handleChange} className="browser-default">
                            {teacherList}
                        </select>

                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s6">
                        <label>Type of Assignment</label>
                        <br/>
                        <select name="type" id="type" value={newAssignment.type} onChange={handleChange} className="browser-default">
                            {typeList}
                        </select>

                    </div>
                </div>
                
                <div className="row">
                    <div className="input-field col s6">
                        <label>Name of Assignment:</label>
                        <br/>
                        <input
                            type="text"
                            name='missingAssignment'
                            id='missingAssignment'
                            className="validate"
                            value={newAssignment.missingAssignment}
                            onChange={handleChange}
                        />

                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s6">
                        <label>Reason you did not complete this assignment</label>
                        <br/>
                        <input
                            name='reason'
                            id='reason'
                            className="validate"
                            value={newAssignment.reason}
                            onChange={handleChange}
                        />
                        
                    </div>
                </div>
                <div className="row">
                    <button
                        className="btn waves-effect waves-light blue darken-4"
                        type="submit"
                    >
                        Submit Trckr
                    </button>
                </div>
            </form>
        </div>
      );
    }


export default NewAssignmentForm