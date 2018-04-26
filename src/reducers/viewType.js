const ViewType = (state = 'SHOW_ALL', action) => {
    switch(action.type){
        case 'VIEWTYPE_CLICK': 
            return action.viewType
        default: 
            return state;
    }
}

export default ViewType;