import React from 'react';
import axios from 'axios';

class TodoList extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      todos: []
    };
  }

  componentDidMount () {
    axios.get('http://localhost:8000/tasks').then(response => {
      console.log(response);
      this.setState({ todos: response.data });
    });
  }

  render () {
    const todos = this.state.todos.map(todos => <div> {todos.name} - {todos.message} </div>);
    console.log(todos);
    return (
      <div>
        {todos}
      </div>
    );
  }
}

export default TodoList;
