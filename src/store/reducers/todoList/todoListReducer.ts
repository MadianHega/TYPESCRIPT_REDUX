import { Todo, TodoActionTypes,  } from '../../types'
import { idGenerator } from '../../confs/confs'
import {
    ADD_TODO, 
    REMOVE_TODO,
    UPDATE_TODO,
    ALL_COMPLETED,
    CLEAR_COMPLETED } from '../../constants/todoActionTypes'

export interface TodoListState {
	todoList: Todo[]
}
const initialState: TodoListState  = { todoList: [] }
  
export default function todoListReducer(
	state = initialState, 
	action: TodoActionTypes): TodoListState {
		switch(action.type) {
			case ADD_TODO:
				return	{
					todoList: [
						{
							id: idGenerator(state.todoList),
							title: action.value,
							completed: false,
						},  ...state.todoList
					]
				}
			case REMOVE_TODO:
				return  { todoList: state.todoList.filter(t => t.id !== action.value) }
			case UPDATE_TODO:	
				return { todoList: state.todoList.map(t => t.id == action.id 
					? {...t, title: action.value} 
					: t) }	
			default:
				return state 
		}
}