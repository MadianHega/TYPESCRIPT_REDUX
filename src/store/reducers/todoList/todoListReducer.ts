import { TodoActionTypes, TodoListState } from '../../types'
import { idGenerator } from '../../confs/confs'
import {
    ADD_TODO, 
    REMOVE_TODO,
	UPDATE_TODO,
	CHECK_TODO,
} from '../../constants/todoActionTypes'

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
			case CHECK_TODO:
				return { todoList: state.todoList.map(t => t.id == action.value
					? {...t, completed: !t.completed} 
					: t) }			
			default:
				return state 
		}
}