import React from 'react';

const Todos = ({todos, deleteTodo}) => {

    const noTodos = <p className="center">Nothing left :)</p>
    const showTodos = () => {
        return todos.map(todo =>{
            return(
                <div className="collection-item" key={todo.id}>
                    <span onClick={() => {deleteTodo(todo.id)}}>{todo.content}</span>
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