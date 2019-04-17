import {
    SHOW_ALL, 
    SHOW_COMPLETED,
    SHOW_ACTIVE,
 } from '../../constants/filtersActionTypes'
import { ShowAllAction, ShowCompletedAction, ShowActiveTodoAction } from '../../types';

 
    export const showAll = ():  ShowAllAction => {
        return { type: SHOW_ALL }
    }

    export const showCompleted = (): ShowCompletedAction => {
        return { type: SHOW_COMPLETED }
    }

    export const showActive = (): ShowActiveTodoAction => {
        return { type: SHOW_ACTIVE }
    }
    
    
