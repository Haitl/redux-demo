import {connect} from 'react-redux';
import link from '../components/link';
import TodosActions from '../actions/todos';

const mapStateToProps = (state, ownProps) => {
    return {
        active: state.viewType === ownProps.viewType
    }
}

const mapDispatchToProps = (dispatch,ownProps) => {
    return {
        handleLinkClick: (e) => {
            e.preventDefault();
            dispatch(TodosActions.viewTypeClick(ownProps.viewType));
        }
    }
}

const Link = connect(mapStateToProps, mapDispatchToProps)(link);

export default Link;