import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo } from '../features/todo/todoSlice'
const TodoListWithDelete = () => {
  const todos = useSelector(state => state.todoMain.todos)

  const dispatch = useDispatch()

  return (
    <ul>
      { todos.map((todo) => (
        <li key={todo.id}>
          {todo.text}
          <button onClick={() => dispatch(removeTodo(todo.id))}>Delete</button>
        </li>
      ))}
    </ul>
  )
}

export default TodoListWithDelete
