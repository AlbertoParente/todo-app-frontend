import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    todo: () => ({
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
    })
})

export default rootReducer
