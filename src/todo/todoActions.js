import axios from 'axios'
import { useDispatch } from 'react-redux'

const URL = 'http://localhost:3003/api/todos'

export const changesDecription = event => ({
    type: 'DESCRIPTION_CHANGED',
    payload: event.target.value
})

export const search = () => {
    const request = axios.get(`${URL}?sort=-createdAt`)

    return {
        type: 'TODO_SEARCHED',
        payload: reques
    }
}

export const add = (description) => {
    return dispatch => {
        axios.post(URL, { description })
            .then(res => dispatch(clear()))
            .then(resp => deispatch(search()))
    }
}

export const markAsDone = (todo) => {
    return dispatch => {
        axios.put(`${URL}/${todo._id}`, { ...todo, done: true })
            .then(resp => dispatch(search()))
    }
}

export const markAsPending = (todo) => {
    return dispatch => {
        axios.put(`${URL}/${todo._id}`, { ...todo, done: true })
            .then(resp => dispatch(search()))
    }
}

export const remove = (todo) => {
    return dispatch => {
        axios.delete(`${URL}/${todo._id}`)
            .then(resp => dispatch(search()))
    }
}

export const clear = () => {
    return { type: 'TODO_CLEAR' }
}