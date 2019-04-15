import {
  ADD_TODO, 
  DELETE_TODO,
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
  
export interface DeleteTodoAction {
    type: typeof DELETE_TODO
    value: number
  }
  
export type TodoActionTypes = AddTodoAction | DeleteTodoAction

  