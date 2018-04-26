
const Filter = (state = '', action) => {
    switch(action.type){
        case 'SEARCH_CHANGE':
            return action.filter;
        default: 
            return state;
    }
}

export default Filter;