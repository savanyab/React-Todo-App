import React from 'react';

class TodoItem extends React.Component {
  render () {
    return (
      <div>
        <h2>{this.props.item.name}</h2>
        <p>{this.props.item.message}</p>
      </div>
    );
  }
}

export default TodoItem;
