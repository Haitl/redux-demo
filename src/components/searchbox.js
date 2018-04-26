import React from 'react';
import ReactDom from 'react-dom';
import PropTypes from 'prop-types';

/*
function SearchBox({filter, handleSearchChange}){
    return (
        <div>
            <span>Filter:</span>
            <input type="text" value = {filter} onChange = {handleSearchChange}/>                
        </div>
    )
}*/

class SearchBox extends React.Component {
    render(){
        return (
            <div>
                <span>Filter:</span>
                <input type="text" value = {this.props.filter} onChange = {this.props.handleSearchChange}/>                
            </div>
        )
    }
}

SearchBox.propTypes = {
    filter: PropTypes.string.isRequired,
    handleSearchChange: PropTypes.func.isRequired
}
export default SearchBox;