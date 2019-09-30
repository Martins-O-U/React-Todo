import React, {Component} from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import Todo from './components/TodoComponents/Todo';


class App extends Component {
		state = {
			todos: [],
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

	render() {
		console.log(this.state);
		return (
			<div>
				<h1>Todo App</h1>
        <TodoForm onSubmit={this.addTodo}/>
        {this.state.todos.map(todo =>(
          <Todo key={todo.id}
          toggleComplete={()=>this.toggleComplete(todo.id)} 
          todo={todo} />
        ))}
			</div>
		);
	}
}

export default App;
