import React from 'react';
import ReactDOM from 'react-dom';
import Todo from './todo';
import PropTypes from 'prop-types';

class TodoList extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
            <ul>
                {this.props.todos.map((todo, index)=>{
                    return <Todo key = {todo.id} {...todo} onClick={() => this.props.handleTodoTextClick(todo.id, todo.completed)}></Todo>
                })}
            </ul>
        )
    }
}

TodoList.prototypes = {
    handleTodoTextClick: PropTypes.func.isRequired,
    todos: PropTypes.array.isRequired
}

export default TodoList;

