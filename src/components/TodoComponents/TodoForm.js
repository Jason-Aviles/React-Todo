import React from 'react';


const TodoForm = (props) => {
    return (
      <div>
            <form  onSubmit={props.addTask}>
                <input 
                type='text'
                 name='taskInput'
                 placeholder='add'
                 value={props.taskInput}
                 onChange={props.changeHandler}
                />
                <button >Submit</button>
              
            </form>
            </div>
    );
}

export default TodoForm;
