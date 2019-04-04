import { Todo } from '../../interface'
import todoStore from '../todoStore'

const ADD_TODO = 'ADD_TODO'
const DELETE_TODO = 'DELETE_TODO'
// const UPDATE_TODO = 'UPDATE_TODO'
// const ALL_COMPLETED = 'ALL_COMPLETED'
// const CLEAR_COMPLETED = 'CLEAR_COMPLETED'

interface todoList {
    state: Todo[]
}

interface AddTodoAction {
  type: typeof ADD_TODO
  value: string
}

interface DeleteTodoAction {
  type: typeof DELETE_TODO
  meta: {
    timestamp: number
  }
}

type TodoActionTypes = AddTodoAction | DeleteTodoAction

export default function todoList (state: [], action: TodoActionTypes){
    let newState
    switch(action.type) {
        case 'ADD_TODO':
        newState = [{
            id: this.idGenerator(state),
            title: action.value,
            completed: false,
        }, ...state] 
        default:
            return state
    }
}