// ./app/store.js
import { configureStore } from '@reduxjs/toolkit'
import todoReducer from '../features/todo/todoSlice'

export default configureStore({
  reducer: {
    todoMain: todoReducer
  }
})


