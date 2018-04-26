import { connect } from 'react-redux';
import Todos from '../components/todos';
import TodosActions from '../actions/todos';

const filterTodos = (todos, filter, viewType) => {
    let reg = new RegExp(filter, 'i')
    let filterTodos = todos.filter(t => t.text.match(reg));
    switch(viewType){
        case 'SHOW_ALL':
            return filterTodos;
        case 'SHOW_COMPLETE':
            return filterTodos.filter(t => t.completed);
        case 'SHOW_UNCOMPLETE': 
            return filterTodos.filter(t => !t.completed);
    }
    return filterTodos;
}

const mapStateToProp = state => {
    return {
        todos: filterTodos(state.todos, state.filter, state.viewType)
    }
}

const mapDispatchToProps = dispatch => {
    return {
        handleTodoTextClick: (id, completed) => {
            dispatch(TodosActions.clickTodoText(id, completed))
        }
    }
}

const TodoList = connect(mapStateToProp, mapDispatchToProps)(Todos);

export default TodoList;
