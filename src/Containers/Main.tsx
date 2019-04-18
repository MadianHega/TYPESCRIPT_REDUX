import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Todo } from '../store/types'
import TodoItem from '../Components/TodoItem'
import Input from '../Components/Input'
import Navbar from '../Components/Navbar'
import { addTodo, removeTodo, updateTodo, checkTodo } from '../store/reducers/todoList/actions'
import { showAll, showCompleted, showActive } from '../store/reducers/filters/actions'
import { getVisibleTodos} from '../store/selectors/index'



interface Props {
 todoList: Todo[]
 filter: string
 addTodo: (value: string) => void
 removeTodo: (id: number) => void
 updateTodo:(value: string, id: number) => void
 checkTodo: (id: number) => void
 showAll: () => void
 showCompleted: () => void
 showActive: () => void
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

  checkTodo = (id: number) => {
    this.props.checkTodo(id)
  }

  showAll = () => {
    this.props.showAll()
  }
  showCompleted = () => {
    this.props.showCompleted()
  }
  
  showActive = () => {
    this.props.showActive()
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
      checkTodo={this.checkTodo}
    />)
   
    return (
      <div className="main-container">
        <Navbar 
          showAll={this.showAll} 
          showCompleted={this.showCompleted} 
          showActive={this.showActive} 
        />
        <div className="main-input">
          <Input handleChange={this.handleChange} value={textInput} />
          <button className="btn-valid" onClick={() => this.validTodo()}>V</button>
        </div>
        {todoItemList}
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  return { todoList: getVisibleTodos(state) }
}

const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators({ 
    addTodo,
    removeTodo, 
    updateTodo, 
    checkTodo,
    showAll,
    showCompleted, 
    showActive }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)