import React from 'react'

export default props => (
    <div role="form" className="todoForm">
        <div className="col-xs-12 col-sm-9 col-ms-10">
            <input id="description" className="form-control" placeholder="Add a task"></input>
        </div>
        <div className="col-xs-12 col-sm-9 col-ms-2">
            <button className="btn btn-primary">
                <i className="fa fa-plus"></i>
            </button>
        </div>
    </div>
)