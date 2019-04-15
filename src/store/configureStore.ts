import { createStore } from 'redux'
import todoListReducer from './reducers/todoList/todoListReducer'

export default createStore(todoListReducer)