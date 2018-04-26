import {combineReducers} from 'redux';
import filter from './searchbox';
import todos from './todos';
import addText from './addTodo';
import viewType from './viewType';

const todoApp = combineReducers({
    filter,
    addText,
    todos,
    viewType
});

export default todoApp;