import React, { Component } from 'react';
import TodoStore from './store/todoStore';
import { Todo } from './interface'
import TodoItem from './Components/TodoItem.';

interface Props {
 
}
interface State{
  todoList: Todo[]
}

class Main extends Component<Props, State> {
  private store: TodoStore = new TodoStore
  
  constructor(props: Todo[]) {
    super(props)
    this.store.addTodo("Hello word")
    this.store.addTodo("Hi Word")
    this.state = {todoList: this.store.todos}
  }

  render() {
    const { todoList } = this.state
    const todoTemList = todoList.map(i => <TodoItem key={i.id} todo={i} handleClick={this.store.deleteTodo} />)
    
    return (
      <div className="">
         {todoTemList}
      </div>
    );
  }
}

export default Main;