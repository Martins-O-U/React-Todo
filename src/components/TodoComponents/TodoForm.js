import React, {Component} from 'react';


class TodoForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            newTask : ""
        }
    }
    handleSubmit = (event)=>{
        event.preventDefault();
        console.log("I got clicked");
    }


    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type='text' name='todo' placeholder='Enter Task...' />
                <button >Add New Task</button>
                <button >Clear task</button>
            </form>
        );
    }
}

export default TodoForm;