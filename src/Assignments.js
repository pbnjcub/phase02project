import React from 'react'
import { useLocation } from 'react-router-dom'
import Assignment from './Assignment'

const Assignments = () => {
    const location = useLocation()
    const allAssignments = location.state

    return (
        <div>
            <h3>Missed Assignments for All</h3>
            <hr/>
            <table className="AllAssignments">
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
                    {allAssignments.map(assignment => (
                        <Assignment key={assignment.id} assignment={assignment}/>
                    ))}
                </tbody>
  
            </table>

        </div>
    )
}

export default Assignments