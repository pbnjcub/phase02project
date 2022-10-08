import React, {useState, useEffect} from 'react'
import { useLocation } from 'react-router-dom'
import Assignment from './Assignment'

const Assignments = () => {
    const location = useLocation()
    const allAssignments = location.state

    return (
        <div>
            <h3>Missed Assignments for All</h3>
            <hr/>
            <ul className="AllAssignments">
                {allAssignments.map(assignment => (
                    <Assignment key={assignment.id} assignment={assignment}/>
                ))}
            </ul>

        </div>
    )
}

export default Assignments