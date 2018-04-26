const AddText = (state = '', action) => {
    switch(action.type){
        case 'ADDTEXT_CHANGE': {
            return action.text
        }
        default: 
            return state;
    }
}

export default AddText