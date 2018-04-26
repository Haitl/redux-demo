import { connect } from 'react-redux';
import SearchActions from '../actions/searchbox';
import SearchBox from '../components/searchbox';


const filterTodos = (todos, filter) => {
    let reg = new RegExp(filter)
    return todos.filter(t => t.text.match(reg));
}

const mapStateToProps = state => {
    return {
        filter: state.filter
    }
}

const mapDispatchToProps = dispatch => {
    return {
        handleSearchChange: function(e) {
            e.preventDefault();
            let filter = e.target.value;
            let actions = new SearchActions();
            dispatch(actions.searchChange(filter));
        }
    }
}

const Filter = connect(mapStateToProps, mapDispatchToProps)(SearchBox);

export default Filter;
