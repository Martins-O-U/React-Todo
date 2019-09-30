import React, {Component} from 'react';
import TodoForm from './components/TodoComponents/TodoForm';


const todoData = [
	{
		task: 'Walk The dog',
		id: 1528817077286,
		completed: false
	},
	{
		task: 'Do Laundries',
		id: 1528817084358,
		completed: false
	}
];


class App extends Component {
	constructor() {
		super();
		this.state = {
			todos: todoData,
		};
  }

	render() {
		console.log(this.state);
		return (
			<div>
				<h1>Todo App</h1>
        <TodoForm />
			</div>
		);
	}
}

export default App;
