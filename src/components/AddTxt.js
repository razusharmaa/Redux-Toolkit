import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../features/todo/todoSlice'

const AddTxt = () => {
  const dispatch = useDispatch()
  const [name, setName] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(addTodo(name))
    setName('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <button type="submit">Add Todo</button>
    </form>
  )
}

export default AddTxt
