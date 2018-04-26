import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

class Todo extends React.Component {
    render(){
        return (
            <li style={{'textDecoration': this.props.completed?'line-through':''}} onClick = {this.props.onClick}>{this.props.text}</li>
        )
    }
}

Todo.prototypes = {
    text: PropTypes.string.isRequired
}

export default Todo;

