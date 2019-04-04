import React, { Component } from 'react';
import { Todo } from '../interface'
import '../App.css'

interface Props {
 todo: Todo
 handleClick: (id: number) => void
}

interface State{
  
}



export default class TodoItem extends Component<Props, State> {
 
  constructor(props: Props) {
    super(props)
    
  }

  render() {
    const { todo: { title , id, completed }, handleClick } = this.props
    return (
      <div className="containerItem">
       <input type="checkbox" className="checkbox"/> 
       <p>{title}</p>
       <button className="btn-delete" onClick={() => handleClick(id)}>X</button>
      </div>
    );
  }
}

