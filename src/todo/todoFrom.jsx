import React from 'react'
import Grid from '../template/grid'
import IconButton from '../template/iconButton'

export default props => (
    <div role="form" className="todoForm">

        <Grid clos="12, 9, 10">
            <input id="description" className="form-control" placeholder="Add a task" 
                value={props.description}></input>
        </Grid>
        <Grid clos="12, 9, 10">
            <IconButton style="primay" icon='plus' 
                onClick={props.handleAdd} />
        </Grid>
    </div>
)
