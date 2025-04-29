import { useState } from 'react';
import './NewToDoTask.css'

function NewTodoTask(props) {

  const [task, setTask] = useState('');
  const [date, setDate] = useState('');

  const taskHandler = (event) => {
    setTask(event.target.value);
  };

  const dueDateHandler = (event) => {
    setDate(event.target.value);
  };

  const clickHandler = () => {
    const newTodo = {
        task: task,
        dueDate: date
    }
    props.addNewTodo(newTodo);
 
    setTask("");
    setDate("");
  }

  return (
    <div className='add-container'>
        <div className='input-container'>
            <div>
                <label>Task</label>
                <input type='text' value={task} onChange={taskHandler} placeholder='Enter task' />
            </div>
            <div>
                <label>Due Date</label>
                <input type='date' value={date} onChange={dueDateHandler} placeholder='Enter date' />
            </div>
           
        </div>
        <button onClick={clickHandler}>Add Task</button>
    </div>
  )
}
export default NewTodoTask