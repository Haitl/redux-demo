
let SearchActions = function(){
    this.searchChange = (filter) => {
        return {
            type: 'SEARCH_CHANGE',
            filter: filter
        }
    }
}

export default SearchActions;