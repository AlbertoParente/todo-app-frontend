import axios from 'axios'

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
    const request = axios.post(URL, { description })

    return [
        { type: 'TODP_ADDED', payload: request }
        search()
    ]
}
