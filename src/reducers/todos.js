
const Todos = (state = [], action) => {
    switch(action.type){
        case 'TODOTEXT_ADD': {
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text
                }
            ]
        };
        case 'TODOTEXT_CLICK': {
            return state.map((todo, index) => {
                if(todo.id === action.id){
                    return Object.assign({}, todo, {completed: !action.completed})
                }
                return todo;
            })
        };
        default: return state;
    }
}

export default Todos;