import React, { Component } from 'react'
import PageHeader from '../template/pageHeader'
import TodoForm from './todoFrom'
import TodoList from './todoList'

export default class Todo extends Components {
    constructor(props) {
        super(props)
        this.state = { description: '', list: [] }
        this.handleChange = this.handleChange.bind(this)
        this.handleAdd = this.handleAdd.bind(this)
    }

    handleChange(e) {
        this.setState({...this.state, description: e.target.value})
    }

    handleAdd() {

    }
    
    render() {
        return (
            <div>
                <PageHeader name="Task" small="Register" />
                <TodoForm description={this.state.description} 
                    handleChange={this.handleChange}
                    handleAdd={this.handleAdd} />
                <TodoList />
            </div>
        )
    }
}
