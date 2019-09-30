import React, {Component} from 'react';
import TodoForm from './components/TodoComponents/TodoForm';


class App extends Component {
		state = {
			todos: [],
    };
    
    addTodo = todo => {
      this.setState({
        todos: [todo, ...this.state.todos]
      })
    }

	render() {
		console.log(this.state);
		return (
			<div>
				<h1>Todo App</h1>
        <TodoForm onSubmit={this.addTodo}/>
        {this.state.todos.map(todo =>(
          <div key={todo.id}>{todo.text}</div>
        ))}
			</div>
		);
	}
}

export default App;
