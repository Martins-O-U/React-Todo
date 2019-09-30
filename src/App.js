import React, {Component} from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import Todo from './components/TodoComponents/Todo';
// import { all } from 'q';


class App extends Component {
		state = {
      todos: [],
      todoToshow: "All", 
    };
    
    addTodo = todo => {
      this.setState({
        todos: [todo, ...this.state.todos]
      })
    }

    toggleComplete = id =>{
      this.setState({
        todos: this.state.todos.map(todo =>{
          if(todo.id ===id){
            return {
             ...todo,
              complete: !todo.complete
            }
          } else {
            return todo;
          }
        })
      })
    }

    updateTodoToShow =(str)=>{
      this.setState({
        todoToshow: str
      })
    }

    handleDeleteTodo = id =>{
      this.setState({
        todos:this.state.todos.filter(todo => todo.id !== id)
      })
    }

    clearCompletedTodo = () =>{
      this.setState({
        todos:this.state.todos.filter(todo => !todo.complete)
      })
    }

	render() {
    let todos =[];
    if (this.state.todoToshow === "All") {
      todos= this.state.todos;
    } else if (this.state.todoToshow === "Active"){
      todos = this.state.todos.filter(todo => !todo.complete);
    } else if (this.state.todoToshow === "Complete"){
      todos = this.state.todos.filter(todo => todo.complete);
    }
		return (
			<div>
				<h1>Todo App</h1>
        <TodoForm onSubmit={this.addTodo}/>
        {todos.map(todo =>(
          <Todo key={todo.id}
          toggleComplete={()=>this.toggleComplete(todo.id)} 
          onDelete ={()=>this.handleDeleteTodo(todo.id)}
          todo={todo} />
        ))}
        <div>
          Todos left: {this.state.todos.filter(todo =>!todo.complete).length}
        </div>
        <div>
          <button onClick={()=>this.updateTodoToShow('All')}>All</button>
          <button onClick={()=>this.updateTodoToShow('Active')}>Active</button>
          <button onClick={()=>this.updateTodoToShow('Complete')}>Complete</button>
        </div>
        {this.state.todos.filter(todo =>todo.complete).length ?(
          <div>
            <button onClick={this.clearCompletedTodo}>Clear completed task</button>
          </div>
        ): null }
			</div>
		);
	}
}

export default App;
