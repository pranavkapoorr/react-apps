import React, { Component } from 'react';
import axios from 'axios';
import './Todos.css';
import Todo from './todo/Todo';
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
    render() {
        return (
            <div className="todos">
             {this.state.loading?<h2>Loading..</h2>:this.myTodos()}   
            </div>
        )
    }
    myTodos(){
        return this.state.todos.map((todo) =>
           <Todo key={todo.id} todo={todo} />
           );
    }
} 

export default Todos
