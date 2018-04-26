let nextTodoId = 0;

const addTodoText = (text) => {
    return {
        type: 'TODOTEXT_ADD',
        id: nextTodoId++,
        text: text
    }
    
}

const clickTodoText = (id, completed) => {
    return {
        type: 'TODOTEXT_CLICK',
        id: id,
        completed: completed
    }
}

const viewTypeClick = (viewType) => {
    return {
        type: 'VIEWTYPE_CLICK',
        viewType: viewType
    }
}

export default { addTodoText, clickTodoText, viewTypeClick }