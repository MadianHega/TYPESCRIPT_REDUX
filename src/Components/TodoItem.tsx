import React from 'react';
import { Todo } from '../store/types'
import '../App.css'

interface Props {
 todo: Todo
 removeTodo: (id: number) => void
 validTodo: () => void
 updateTodo: (value: string, id: number) => void
}

interface State{
  edit: boolean
  title: string
}


export default class TodoItem extends React.Component<Props, State> {
 
  constructor(props: Props) {
    super(props)
    // this.state = { edit: false, title: '' }
  }

  componentDidMount = () => {
    this.setState({ title: this.props.todo.title })
  }

  updateTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.props.updateTodo(e.target.value, this.props.todo.id)
  }

  render() {
    const { 
      todo: { id, completed, title },
      removeTodo, 
    } = this.props

    return (
      <div className="containerItem">
        <input type="checkbox" className="checkbox"/> 
        <input type="text" onChange={this.updateTitle} value={title} />
        <button className="btn-delete" onClick={() => removeTodo(id)}>X</button>
      </div>
    )
  }
}

