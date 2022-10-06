import React, {useState, useEffect, useCallback} from 'react'



const NewAssignmentForm = ({currDate}) => {
    const [students, setStudents] = useState([])
    const [courses, setCourses] = useState([])
    const [teachers, setTeachers] = useState([])
    const [types, setTypes] = useState([])
    const [newAssignment, setNewAssignment] = useState({
        date: '',
        name: '',
        classTeacher: '',
        class: '',
        missingAssignment: '',
        type: '',
        reason: ''
    })


    useEffect(() => {
        fetch("http://localhost:3001/students")
        .then(resp => resp.json())
        .then(data => setStudents(data))
    }, [])

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

    
    const studentsList = students.map(student => <option key={student.name} value={student.name}>{student.name}</option>) 
    

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
            date: {currDate},
            name: newAssignment.name,
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
            console.log(data)
        })
    }

    return (
        <form className="NewAssignment" onSubmit={handleSubmit}>
          <label>
            Student Name:
            <select
              name="name"
              value={newAssignment.name}
              onChange={handleChange}
            >
                {studentsList}
            </select>
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