import {
  ADD_TODO, 
  REMOVE_TODO,
  UPDATE_TODO,
  ALL_COMPLETED,
  CLEAR_COMPLETED } from './constants/todoActionTypes'

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

export interface updateTodoAction {
  type: typeof UPDATE_TODO
  id: number
  value: string
}
  
export type TodoActionTypes = AddTodoAction | RemoveTodoAction | updateTodoAction

  