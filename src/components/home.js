import React, { Component } from 'react'
import { connect } from 'react-redux';

export class Home extends Component {

  render() {
    const {pendingTodos} = this.props;
    return (
      <div>
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
  
  export default connect(mapStateToProps)(Home);
