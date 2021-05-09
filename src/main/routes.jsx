import React from 'react'
import { Router, Route, Redirect, hastHistory } from 'react-router'
import Todo from '../todo/todo'
import About from '../about/about'

export default props => (
    <Router history={hastHistory}>
        <Route path='/all' component={Todo} />
        <Route path='/about' component={About} />
        <Redirect from="*" to="/all " />
    </Router>
)
