import React from 'react'
import { Link } from 'react-router-dom'

const NewAssignment = ({selectedStudent}) => {
    console.log(selectedStudent)
    return (
        <Link to='/assignments/new' state={selectedStudent}
        >
            <button>Click to submit a new assignment</button>
        </Link>
    )

}

export default NewAssignment