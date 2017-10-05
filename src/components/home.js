import React, { Component } from 'react';
import PendingTodos from './pendingtodos';
import AddTodo from './addtodo';

export class Home extends Component {

  render() {
    return (
      <div>
        <PendingTodos />
        <AddTodo />
      </div>
    )
  }
}

export default Home;
