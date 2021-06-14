import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreatores } from 'redux'
import Grid from '../template/grid'
import IconButton from '../template/iconButton'
import { add, changeDescription, search } from './todoActions'

class TodoForm extends Component {
    constructor(props) {
        super(props)
        this.keyHandler = this.keyHandler.bind(this)
    }

    componentWillMount() {
        this.props.search()
    }

    keyHandler(e) {
        if (e.key === 'Enter') {
            e.shiftKey ? this.props.handleSearch() : this.props.handleAdd()
        } else if (e.key === 'Espace') {
            props.headleClear()
        }
    }

    render() {
        return (
            <div role="form" className="todoForm">

                <Grid cols="12 9 10">
                    <input id="description" className="form-control"
                        placeholder="Add a task"
                        onChange={this.props.changeDescription}
                        onKeyUp={this.props.keyHandler}
                        value={this.props.description} />
                </Grid>
                <Grid cols="12 3 2">
                    <IconButton style="primary" icon="plus"
                        onClick={this.props.handleAdd} />
                    <IconButton style="info" icon="search"
                        onClick={this.props.handleSearch} />
                    <IconButton style="default" icon="close"
                        onClick={this.props.headleClear}
                    />
                </Grid>
            </div>
        )
    }
}

const mapStateToProps = state => ({ description: state.todo.description })
const mapDispatchToProps = dispatch => bindActionCreatores({ add, changeDescription, search }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)
