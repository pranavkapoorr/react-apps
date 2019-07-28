import React, { Component } from 'react'
import './Todo.css';
export default class Todo extends Component {
    render() {
        return (
            <div className={!this.props.todo.completed?'todo ':'todo completed'}>
                <input type="checkbox"/>
                {this.props.todo.title}
            </div>
        )
    }
}
