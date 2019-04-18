import {
    ADD_TODO, 
    REMOVE_TODO,
    UPDATE_TODO,
    CHECK_TODO,
 } from '../../constants/todoActionTypes'
import {AddTodoAction, RemoveTodoAction, UpdateTodoAction, CheckTodoAction} from '../../types';

 
export const addTodo = (text: string): AddTodoAction => {
    return { type: ADD_TODO, value: text }
}

export const removeTodo = (id: number): RemoveTodoAction => {
    return { type: REMOVE_TODO, value: id }
}

export const updateTodo = (text: string, id: number): UpdateTodoAction => {
    return { type: UPDATE_TODO, value: text, id: id }
}

export const checkTodo = (id: number): CheckTodoAction => {
    return { type: CHECK_TODO, value: id}
}
