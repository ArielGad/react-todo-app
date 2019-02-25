import React, { Component } from 'react';
import Todos from './Todos';
import AddTodo from './AddTodo'

class App extends Component {
    state = {
        todos: [
            {content:"Eat food", id:1},
            {content:"Clean dishes", id:2},
            {content:"Go to sleep", id:3}
            ]
    }

    deleteTodo = (id) => {
        const newList = this.state.todos.filter((todo) =>{
            return todo.id !== id
        })

        this.setState({todos:newList})
    }

    addTodo = (todo) => {
        todo.id = Math.random() * 100;
        let todos = this.state.todos.slice()
        this.setState({todos: todos.concat(todo)})

    }

    render() {
    return (
      <div className="todo-app container">
      <h1 className="center blue-text">Todo's</h1>
      <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}/>
      <AddTodo addTodo={this.addTodo}/>
      </div>
    );
    }

}

export default App;
