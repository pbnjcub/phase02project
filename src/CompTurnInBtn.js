import React from 'react'
import './css/materialize.min.css';


const CompTurnInBtn = ({onTurnIn, turnedIn, happyEmoji, sadEmoji}) => {
    
    return (
        <td>
            <button 
                style={{fontSize: 10}}
                className="btn waves-effect waves-light blue darken-4"
                onClick={onTurnIn}
            >
                {turnedIn ? `Completed ${String.fromCodePoint(happyEmoji)}` : `Turn In ${String.fromCodePoint(sadEmoji)}`}
            </button>
        </td>
        
    )
}

export default CompTurnInBtn