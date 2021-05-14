import React, { Component } from 'react'
import axios from 'axios'
import PageHeader from '../template/pageHeader'
import TodoForm from './todoFrom'
import TodoList from './todoList'

const URL = 'http://localhost:3003/api/all'

export default class Todo extends Components {
    constructor(props) {
        super(props)
        this.state = { description: '', list: [] }
        this.handleChange = this.handleChange.bind(this)
        this.handleAdd = this.handleAdd.bind(this)
        this.handleRemove = this.handleRemove.bind(this)
        this.refresh()
    }

    refresh() {
        axios.get(`${URL}?short=-createdAt`)
            .then(resp => this.setState({...this.state, description : '', list: resp.data}))
    }

    handleChange(e) {
        this.setState({...this.state, description: e.target.value})
    }

    handleAdd() {
        const descrition = this.state.description
        axios.post(URL, { description })
            .then(resp => this.refresh())
    }
    
    handleRemove(todo) {
        axios.delete(`${URL}/${todo._id}`)
            .then(resp => this.refresh())
    }

    render() {
        return (
            <div>
                <PageHeader name="Task" small="Register" />
                <TodoForm description={this.state.description} 
                    handleChange={this.handleChange}
                    handleAdd={this.handleAdd} />
                <TodoList list={this.state.list} 
                    handleRemove={this.handleRemove} />
            </div>
        )
    }
}
