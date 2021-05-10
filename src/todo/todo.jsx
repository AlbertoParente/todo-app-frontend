import React, { Component } from 'react'
import PageHeader from '../template/pageHeader'
import TodoForm from './todoFrom'
import TodoList from './todoList'

export default class Todo extends Components {
    render() {
        return (
            <div>
                <PageHeader name="Task" small="Register" />
                <TodoForm />
                <TodoList />
            </div>
        )
    }
}
