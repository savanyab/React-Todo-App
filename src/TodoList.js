import React from 'react';
import axios from 'axios';
import TodoItem from './TodoItem';

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
    const todos = this.state.todos.map(todo => <TodoItem item={todo} />);
    console.log(todos);
    return (
      <div>
        {todos}
      </div>
    );
  }
}

export default TodoList;
