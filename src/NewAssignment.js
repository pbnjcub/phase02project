import React from 'react'
import { Link } from 'react-router-dom'

const NewAssignment = () => {

    return (
        <Link to={'/assignments/new'}>
            <button>Click to submit a new assignment</button>
        </Link>
    )






}

export default NewAssignment