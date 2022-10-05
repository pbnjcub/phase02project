import React, {useState, useEffect, useCallback} from 'react'

const NewAssignmentForm = () => {
    const [students, setStudents] = useState([])
    const [courses, setCourses] = useState([])
    const [teachers, setTeachers] = useState([])
    const [name, setName] = useState('')
    const [courseName, setCourseName] = useState('')
    const [teacherName, setTeacherName] = useState('')

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

    
    const studentsList = students.map(student => <option key={student.name} value={student.name}>{student.name}</option>) 
    
    const coursesList = courses.map(course => <option key={course.name} value={course.name}>{course.name}</option>) 
    
    const teacherList = teachers.map(teacher => <option key={teacher.name} value={teacher.name}>{teacher.name}</option>) 
    // function handleSubmit(e) {
    //     e.preventDefault()
    //     const assignmentData = {
    //         student: name,

    //     }
    // }

    return (
        <form className="NewAssignment" >
          <label>
            Student Name:
            <select
              name="students"
              value="students"
              onChange={(e) => setName(e.target.value)}
            >
                {studentsList}
            </select>
          </label>
    
          <label>
            Course:
            <select
              name="courses"
              value="courses"
              onChange={(e) => setCourseName(e.target.value)}
            >
                {coursesList}
            </select>
          </label>
    
          <label>
            Teacher of Class:
            <select
              name="teacher"
              value="teacher"
              onChange={(e) => setTeacherName(e.target.value)}
            >
                {teacherList}
            </select>
          </label>
          <button type="submit">Add to List</button>
        </form>
      );
    }


export default NewAssignmentForm