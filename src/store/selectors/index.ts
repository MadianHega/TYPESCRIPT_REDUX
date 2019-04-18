import { createSelector } from 'reselect'
import {
    SHOW_ALL, 
	SHOW_COMPLETED,
	SHOW_ACTIVE,
} from '../constants/filtersActionTypes'

const getVisibilityFilter = (state: any) => state.filtersReducer.filter
const getTodos = (state: any) => state.todoListReducer.todoList

export const getVisibleTodos = createSelector(
	[getVisibilityFilter, getTodos],
	(filter, todoList) => {
		switch (filter) {
			case SHOW_ALL:
				return todoList
			case SHOW_COMPLETED:
				return todoList.filter((t: any) => t.completed)
			case SHOW_ACTIVE:
				return todoList.filter((t: any) => !t.completed)
			default:
				throw new Error(`Unknown filter:
${filter}`)
		}
	},
)