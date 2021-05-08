import React from 'react'

export default props => (
    <nav className="navbar navbar-inverse bg-inverse">
        <div className="navbar-header">
            <a href="#" className="navbar-brand">
                <i className="fa fa-calendar-check-o">
                    TodoApp
                </i>
            </a>
        </div>

        <div id="navbar" className="navbar-collapse collapse">
            <ul className="nav navbar-nav">
                <li><a href="#/all">Tasks</a></li>
                <li><a href="#/about">About</a></li>
            </ul>
        </div>
    </nav>
)