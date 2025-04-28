import TodoItem from "./TodoItem/TodoItem"

function TodoList(props) {
    const todo = props.todos;
  return (
    <div>
       <TodoItem task={todo[0].task} isFinish = {todo[0].isFinish} dueDate = {todo[0].dueDate}/>
       <TodoItem task={todo[1].task} isFinish = {todo[1].isFinish} dueDate = {todo[1].dueDate}/>
       <TodoItem task={todo[2].task} isFinish = {todo[2].isFinish} dueDate = {todo[2].dueDate}/>
       <TodoItem task={todo[3].task} isFinish = {todo[3].isFinish} dueDate = {todo[3].dueDate}/>

    </div>
  )
}
export default TodoList