import React, { Component } from 'react';
import { connect } from 'react-redux'
import { ADD_TODO } from '../store/constants/todoActionTypes'
import { Todo, TodoActionTypes } from '../store/types'
import TodoItem from '../Components/TodoItem';
import Input from '../Components/Input'
import { addTodo } from '../store/reducers/todoList/actions'
import { bindActionCreators } from 'redux';

interface Props {
 todoList: Todo[]
 addTodo: (action: any) => void
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
    this.props.addTodo(this.state.textInput)
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
const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators({ addTodo }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)