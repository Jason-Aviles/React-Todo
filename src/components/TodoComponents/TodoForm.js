import React from 'react';


const TodoForm = (props) => {
    return (
      
            <form  onSubmit={props.addTask}>
                <input 
                type='text'
                 name='taskInput'
                 placeholder='add'
                 value={props.taskInput}
                 onChange={props.changeHandler}
                />
                <button >Submit</button>
                <button onChange={props.Clear}>Clear</button>
            </form>
       
    );
}

export default TodoForm;
