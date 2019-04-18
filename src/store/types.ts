import {
  ADD_TODO, 
  REMOVE_TODO,
  UPDATE_TODO,
  CHECK_TODO,
} from './constants/todoActionTypes'

import {
  SHOW_ALL, 
  SHOW_COMPLETED,
  SHOW_ACTIVE,
} from './constants/filtersActionTypes'

export interface Todo {
    id: number
    title: string
    completed: boolean
}
  
export interface AddTodoAction {
    type: typeof ADD_TODO
    value: string
}
  
export interface RemoveTodoAction {
    type: typeof REMOVE_TODO
    value: number
}

export interface UpdateTodoAction {
  type: typeof UPDATE_TODO
  id: number
  value: string
}
export interface CheckTodoAction {
  type: typeof CHECK_TODO
  value: number
}

export interface TodoListState {
	todoList: Todo[]
}
  
export type TodoActionTypes = AddTodoAction | RemoveTodoAction | UpdateTodoAction | CheckTodoAction

export interface ShowAllAction {
  type: typeof SHOW_ALL
}

export interface ShowCompletedAction {
  type: typeof SHOW_COMPLETED
}

export interface ShowActiveTodoAction {
  type: typeof SHOW_ACTIVE
}

export type FilterActionTypes = ShowAllAction | ShowCompletedAction | ShowActiveTodoAction