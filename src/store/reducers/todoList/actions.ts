import {
    ADD_TODO, 
    DELETE_TODO,
    UPDATE_TODO,
    ALL_COMPLETED,
    CLEAR_COMPLETED } from '../../constants/todoActionTypes'

 
    export const addTodo = (text: string) => {
        return { type: ADD_TODO, value: text }
    }
