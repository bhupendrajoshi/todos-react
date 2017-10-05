import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import PendingTodos from './pendingtodos';
import AddTodo from './addtodo';

export class Home extends Component {

  render() {
    return (
      <div>
        <PendingTodos />
        <AddTodo />
        <Link to='/completed'>Show completed</Link>
      </div>
    )
  }
}

export default Home;
