import React, {Component} from 'react';


class TodoForm extends Component {
    constructor(props){
        super(props)
        this.state = {value : "" }
    }

    handleChange = event => {
        this.setState({ 
            value: event.target.value
        });
    };

    handleSubmit = (event)=>{
        event.preventDefault();
        this.props.onSubmit({
            id: Date.now(),
            text: this.state.value,
            complete: false  
        });
        this.setState({
            value: ""
        });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type='text' name='text' placeholder='Enter Task...' 
                    value={this.state.value} onChange={this.handleChange} />
                <button onClick={this.handleSubmit}>Add New Task</button>
            </form>
        );
    }
}

export default TodoForm;