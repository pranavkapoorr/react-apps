import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './TodoItem.css';
import Todo from '../../../models/Todo';

export default class TodoItem extends Component {
    state = {
        todo: this.props.todo
    }
    
    render() {
        const { id, title } = this.props.todo;
        return (
            <div className={!this.props.todo.completed?'todo ':'todo completed'}>
                <input id={id} type="checkbox" className="set-complete" onClick={
                    this.props.changeCompleted.bind(this,id)
                    }/>
                <label for={id}>{title}</label>
                <button className="delete" onClick={this.props.deleteTodo.bind(this, id)} >x</button>
            </div>
        )
    }
}

TodoItem.propTypes = {
    todo: PropTypes.instanceOf(Todo).isRequired,
    changeCompleted: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired,
  }
