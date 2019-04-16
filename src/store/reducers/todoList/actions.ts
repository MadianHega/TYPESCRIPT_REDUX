import {
    ADD_TODO, 
    REMOVE_TODO,
    UPDATE_TODO,
    ALL_COMPLETED,
    CLEAR_COMPLETED } from '../../constants/todoActionTypes'
import {Todo, AddTodoAction, RemoveTodoAction, updateTodoAction} from '../../types';

 
    export const addTodo = (text: string): AddTodoAction => {
        return { type: ADD_TODO, value: text }
    }

    export const removeTodo = (id: number): RemoveTodoAction => {
        return { type: REMOVE_TODO, value: id }
    }

    export const updateTodo = (text: string, id: number): updateTodoAction => {
        return { type: UPDATE_TODO, value: text, id: id }
    }
