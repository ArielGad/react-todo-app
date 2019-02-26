import React from 'react';

const Todos = ({todos, deleteTodo}) => {

    const noTodos = <p className="center">Nothing left :)</p>
    const showTodos = () => {
        return todos.map(todo =>{
            return(
                <div className="collection-item" key={todo.id}>
                    <span>{todo.content}</span>
                    <i style={{margin: '10px'}} onClick={() => {deleteTodo(todo.id)}} className="tiny material-icons">delete</i>

                </div>
            )
        })
    }

    const todoList = todos.length ? (showTodos()): (noTodos);

    return (
        <div className="todos collection">
            {todoList}
        </div>
    )
}

export default Todos;