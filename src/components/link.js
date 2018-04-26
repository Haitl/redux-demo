import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

class Link extends React.Component {
    render() {
        let active = this.props.active;
        if(active){
            return (
                <span>
                    {this.props.children}
                </span>
            )
        }
        return (
            <span>
                <a href="#" onClick = {this.props.handleLinkClick}>{this.props.children}</a>
            </span>
        )
    }
}

Link.prototypes = {
    children: PropTypes.string.isRequired
}

export default Link;