import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types'

class AddTodo extends React.Component{

    render(){
        return (
            <form onSubmit = {this.props.handleAddTodoClick}>
                <label htmlFor="todoText">Todo Text</label>
                <input type="text" value={this.props.addText} onChange={this.props.handleAddTextChange}/>
                <button type="submit">Add</button>
            </form>
        )
    }
}


AddTodo.propTypes = {
    addText: PropTypes.string.isRequired,
    handleAddTextChange: PropTypes.func.isRequired,
    handleAddTodoClick: PropTypes.func.isRequired
}

export default AddTodo;