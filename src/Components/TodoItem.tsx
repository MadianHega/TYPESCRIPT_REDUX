import React, { Component } from 'react';
import { Todo } from '../store/types'
import '../App.css'

interface Props {
 todo: Todo
 deleteTodo: (id: number) => void
 validTodo: () => void
}

interface State{
  
}


export default class TodoItem extends Component<Props, State> {
 
  constructor(props: Props) {
    super(props)
    
  }

  render() {
    const { 
      todo: { title , id, completed },
      deleteTodo, 
      validTodo
    } = this.props

    return (
      <div className="containerItem">
       <input type="checkbox" className="checkbox"/> 
       <p>{title}</p>
       <button className="btn-valid" onClick={() => validTodo()}>V</button>
       <button className="btn-delete" onClick={() => deleteTodo(id)}>X</button>
      </div>
    );
  }
}

