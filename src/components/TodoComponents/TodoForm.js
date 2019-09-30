import React, {Component} from 'react';


class TodoForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            newTask : ""
        }
    }

    handleChange = event => {
        this.setState({ 
            [event.target.name]: event.target.value
        });
    };

    handleSubmit = (event)=>{
        event.preventDefault();
        this.props.onSubmit({
            id: Date.now(),
            text: this.state.text,
            complete: false  
        });
        this.setState({
            text: ""
        });
 
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type='text' name='text' placeholder='Enter Task...' 
                    value={this.state.text} onChange={this.handleChange} />
                <button onClick={this.handleSubmit}>Add New Task</button>
                <button >Clear task</button>
            </form>
        );
    }
}

export default TodoForm;