import React, { Component } from 'react';
import axios from 'axios';
import './Todos.css';
import TodoItem from './todo/TodoItem';
export class Todos extends Component {
    state = {
        loading: true,
        todos: []
    }
    componentDidMount(){
        axios.get('https://restify-the-placeholder-api.herokuapp.com/todos')
        .then(res =>{
            console.log(res.data); 
            this.setState({
            todos:res.data,
            loading:false
        })})
        .catch(err => console.error(err))
    }
    deleteTodo = (id) => {
        this.setState({
            todos: [...this.state.todos.filter((todo) => todo.id !== id)]
        })
    }
    changeCompleted = (id) => {
        this.setState({
			todos: this.state.todos.map((todo) => {
				if (todo.id === id) {
					todo.completed = !todo.completed;
				}
				return todo;
			})
		});
    }
    render() {
        return (
            <div className="todos">
             {this.state.loading?<h2>Loading..</h2>:this.myTodos()}   
            </div>
        )
    }
    myTodos(){
        return this.state.todos.map((todo) =>
           <TodoItem key={todo.id} todo={todo} changeCompleted={this.changeCompleted} deleteTodo={this.deleteTodo}/>
           );
    }
}

export default Todos;
