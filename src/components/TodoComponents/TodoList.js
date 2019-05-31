
import React from 'react';
import Todo from './Todo'


const TodoList = (props) => {
 
    return (
      <div>
        {props.tasks.map(
        (task)=>{
            return <Todo key={task.id} task={task} toggleItem={props.toggleItem}  />
        }

        )}
        <button onClick={props.clearPurchased}>Clear</button>
      </div>
     
    )
}

export default TodoList;
