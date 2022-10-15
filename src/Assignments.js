import React from 'react'
import Assignment from './Assignment'
import './css/materialize.min.css';

const Assignments = ({assignments, onUpdateAssignment}) => {
    return (
        <div style={{padding: 25}}>
            <h5>Missed Assignments for All</h5>
            <hr/>
            <table className="striped">
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
                    {assignments.map(assignment => (
                        <Assignment key={assignment.id} assignment={assignment} onUpdateAssignment={onUpdateAssignment}/>
                    ))}
                </tbody>
  
            </table>

        </div>
    )
}

export default Assignments