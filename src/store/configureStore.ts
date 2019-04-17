import { createStore, combineReducers } from 'redux'
import todoListReducer from './reducers/todoList/todoListReducer'
import filtersReducer from './reducers/filters/filtersReducer'

const reducer = combineReducers({ todoListReducer, filtersReducer })
export default createStore(reducer)