import React from 'react'
import { Link } from 'react-router-dom'

const NewAssignment = ({selectedStudent, onNewAssignments}) => {

    return (
        <Link 
            // to={newAssignmentProps}
            to='/assignments/new' state={{selectedStudent: selectedStudent, onNewAssignments: onNewAssignments}}
        >
            <button>Click to submit a new assignment</button>
        </Link>
    )

}

export default NewAssignment