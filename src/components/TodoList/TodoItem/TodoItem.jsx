import './TodoItem.css'

function TodoItem(props) {

    const task = props.task;
    const isFinished = props.isFinished;        
    const dueDate = props.dueDate;

    const date = dueDate.getDate();
    const month = dueDate.getMonth() + 1;
    const year = dueDate.getFullYear();
  return (
    <div className='form-control'>
        <div className='cb-container'>
            <input checked = "isFinished" type="checkbox" />
        </div>
        <div className='tn-container'>
            {task}
        </div>
        <div className='dd-container'>
           {dueDate.toLocaleDateString()}
        </div>
    </div>
  )
}
export default TodoItem