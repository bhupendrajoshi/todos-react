import React, { Component } from 'react'
import { connect } from 'react-redux';

export class PendingTodos extends Component {
  render() {
    const {pendingTodos} = this.props;
    return (
      <div>
        <h1>Pending todos</h1>
        <ol>
        {pendingTodos.map(todo => (
            <li key={todo.id}>{todo.title}</li>
        ))}
        </ol>
      </div>
    )
  }
}

function mapStateToProps({ todos }) {
  return {
    pendingTodos: todos.filter(todo => todo.status === 0),
  }
}

export default connect(mapStateToProps)(PendingTodos);
