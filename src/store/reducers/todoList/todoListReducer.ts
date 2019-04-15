import { Todo, TodoActionTypes } from '../../types'
import { idGenerator } from '../../confs/confs'

export interface TodoListState {
	todoList: Todo[]
}
const initialState: TodoListState  = { todoList: [] }
  
export default function todoListReducer(
	state = initialState, 
	action: TodoActionTypes): TodoListState {
		switch(action.type) {
			case 'ADD_TODO':
				return	{
					todoList: [
						{
							id: idGenerator(state.todoList),
							title: action.value,
							completed: false,
						},  ...state.todoList
					]
				}
			default:
				return state 
		}
}