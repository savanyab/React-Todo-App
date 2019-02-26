import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import TodoList from './TodoList';

class App extends Component {
  constructor (props) {
    super(props);
    console.log('Itt tőtődök be');
  }

  render () {
    return (
      <div className='App'>
        <h1>Todos</h1>
        <TodoList dezso='ize' />
      </div>
    );
  }
}

export default App;
