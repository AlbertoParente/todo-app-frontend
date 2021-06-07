const INITIAL_STATE = {
    description: 'Study',
    list: [{
        _id: 1,
        description: 'Study React...!',
        done: true
    }, {
        _id: 2,
        description: 'Study Angular...!',
        done: false
    }, {
        _id: 3,
        description: 'Study Docker...!'
    }]
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'DESCRIPTION_CHANGED':
            return { ...state, description: action.payload }
        default:
            return state
    }
}
