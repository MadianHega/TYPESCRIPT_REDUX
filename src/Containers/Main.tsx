import React, { Component } from 'react';
import { connect } from 'react-redux'
import { ADD_TODO } from '../store/constants/todoActionTypes'
import { Todo, TodoActionTypes } from '../store/types'
import TodoItem from '../Components/TodoItem';
import Input from '../Components/Input'

interface Props {
 todoList: Todo[]
 dispatch: (action: any) => void
}
interface State{
  textInput: string
}

class Main extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {textInput: ''}
  }

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    console.log(e.target.value)
    let nextState = e.target.value
    this.setState({ textInput: nextState })
  }
  
  deleteTodo = () => {

  }

  validTodo = () => {
    const action = { type: ADD_TODO, value: this.state.textInput }
    this.props.dispatch(action)
  }

  render() {
    const { todoList } = this.props
    const todoItemList = todoList.map(i => <TodoItem 
      key={i.id} 
      todo={i} 
      validTodo={this.validTodo} 
      deleteTodo={this.deleteTodo} 
    />)
   
    console.log("redux", this.props.todoList)
    return (
      <div className="">
        <div>
         <Input handleChange={this.handleChange} />
         <button className="btn-valid" onClick={() => this.validTodo()}>V</button>
        </div>
        {todoItemList}
      </div>
    );
  }
}
const mapStateToProps = (state: any) => {
  return {todoList: state.todoList}
}
export default connect(mapStateToProps)(Main)