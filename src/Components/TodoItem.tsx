import React from 'react';
import { Todo } from '../store/types'
import '../App.css'

interface Props {
 todo: Todo
 removeTodo: (id: number) => void
 validTodo: () => void
 updateTodo: (value: string, id: number) => void
 checkTodo: (id: number) => void
}
interface State {
  checked: boolean
}
export default class TodoItem extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {checked: false}
  }

  
  updateTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.props.updateTodo(e.target.value, this.props.todo.id)
  }

  test = () => {
    this.setState({checked: !this.state.checked})
  }


  render() {
    const { 
      todo: { id, completed, title },
      removeTodo, 
      checkTodo
    } = this.props

    console.log("check", completed)
    return (
      <div className="containerItem">
        <input type="checkbox" className="checkbox" checked={completed} onChange={() => checkTodo(id)} /> 
        <input type="text" onChange={this.updateTitle} value={title} />
        <button className="btn-delete" onClick={() => removeTodo(id)}>X</button>
      </div>
    )
  }
}

