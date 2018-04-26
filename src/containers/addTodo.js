import { connect } from 'react-redux';
import addTodo from '../components/addTodo';
import AddTodoActions from '../actions/addTodo';
import TodosActions from '../actions/todos';

const mapStateToProps = state => {
    return {
        addText: state.addText
    }
}

let addText;
const mapDispatchToProps = (dispatch) => {
    return {
        handleAddTextChange: (e) => {
            e.preventDefault();
            addText = e.target.value;
            dispatch(AddTodoActions.changeAddText(e.target.value));
        },
        handleAddTodoClick: (e) => {
            e.preventDefault();
            dispatch(TodosActions.addTodoText(addText));
            dispatch(AddTodoActions.changeAddText(''));
            
        }
    }
}

const AddTodo = connect(mapStateToProps, mapDispatchToProps)(addTodo);

export default AddTodo;