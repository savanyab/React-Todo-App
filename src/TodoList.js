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
      console.log('componentDidMount response: ' , response);
      this.setState({ todos: response.data });
    });
  }

  render () {
    const todos = this.state.todos.map(todo => <TodoItem key={todo.id} item={todo} />);
    console.log('TodoList render todos: ', todos);
    return (
      <div>
      <h3>Todos</h3>
        {todos}
      </div>
    );
  }
}

export default TodoList;
