import React, {useState, useEffect} from 'react'
import Assignment from './Assignment'


const ByStudentDetail = ({selectedStudent, assignments}) => {
    const [happyEmojis, setHappyEmojis] = useState([])
    const [sadEmojis, setSadEmojis] = useState([])

    useEffect(() => {
        fetch("https://emojihub.herokuapp.com/api/random/group_face_positive")
        .then(resp => resp.json())
        .then(data => setHappyEmojis(data))
    }, [])

    useEffect(() => {
        fetch("https://emojihub.herokuapp.com/api/random/group_face_negative")
        .then(resp => resp.json())
        .then(data => setSadEmojis(data))
    }, [])

    console.log(happyEmojis)

    const filteredAssignmentsList = assignments.filter(assignment => {
        if(assignment.name === selectedStudent) {
            return assignment
        }
    }) 
    

    function handleQRSubmit(e) {
        e.preventDefault()
        
    }

    return (
        
            <table className="assignments-by-student">
                <thead>
                    <tr>
                        <th>Student Name</th>
                        <th>Class</th>
                        <th>Teacher</th>
                        <th>Type</th>
                        <th>Name of Assignment</th>
                        <th>Reason</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredAssignmentsList.map(assignment => (
                        <Assignment key={assignment.id} assignment={assignment}/>
                    ))}
                </tbody>
            </table>
    )
}

export default ByStudentDetail