import React from 'react'
import './css/materialize.min.css';


const DelBtn = ({onDeleteAssignment, assignment}) => {
    
    function onDelete() {
        fetch(`http://localhost:3001/assignments/${assignment.id}`, {
            method: 'DELETE',
        })
        .then(resp => resp.json())
        .then(() => onDeleteAssignment(assignment))
    }

    return (
        <td>
            {assignment.turnedIn ? <i class="large material-icons" onClick={onDelete}>delete</i> : ""}
        </td>
    )
}

export default DelBtn