import React from 'react';
import './css/styles.css'

const Todo = (props) => {
 
    return (
        <div   className={`item ${props.task.completed ? 'completed' : ''}`}  onClick={()=> props.toggleItem(props.task.id)}>
        
            <p>{props.task.task}</p>
            
        </div>
    );
}

export default Todo;
