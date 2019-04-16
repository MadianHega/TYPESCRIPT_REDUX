import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Todo } from '../store/types'
import TodoItem from '../Components/TodoItem';
import Input from '../Components/Input'
import { addTodo, removeTodo, updateTodo } from '../store/reducers/todoList/actions'
import { bindActionCreators } from 'redux';

interface Props {
 todoList: Todo[]
 addTodo: (value: string) => void
 removeTodo: (id: number) => void
 updateTodo:(value: string, id: number) => void
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
    let nextState = e.target.value
    this.setState({ textInput: nextState })
  }
  
  updateTodo = (value: string, id: number) => {
   this.props.updateTodo(value, id)
  }
  
  removeTodo = (id: number) => {
    this.props.removeTodo(id)
  }

  validTodo = () => {
    if(this.state.textInput.length > 0) {
      this.props.addTodo(this.state.textInput)
      this.setState({textInput: ''})
    } 
  }

  render() {
    const { todoList } = this.props
    const { textInput } = this.state
    const todoItemList = todoList.map(i => <TodoItem 
      key={i.id} 
      todo={i} 
      validTodo={this.validTodo} 
      removeTodo={this.removeTodo} 
      updateTodo={this. updateTodo}
    />)
   
    console.log("redux", this.props.todoList)
    return (
      <div className="">
        <div>
         <Input handleChange={this.handleChange} value={textInput} />
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
  return bindActionCreators({ addTodo, removeTodo, updateTodo }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)