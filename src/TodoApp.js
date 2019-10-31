import React from "react";

import { AddTodo } from "./Components/AddTodo";
import { List } from "./Components/List";
import "./styles.css";

export class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      nextId: 0
    };
  }

  render() {
    const { todos } = this.state;
    return (
      <div className="yamiochi">
        <h2>闇堕ちったー</h2>
        <AddTodo addTodo={this.addTodo} />
        <List deleteTodo={this.deleteTodo} todos={todos} />
      </div>
    );
  }

  addTodo = title => {
    const { todos, nextId } = this.state;
    this.setState({
      todos: [...todos, { id: nextId + 1, title: title }],
      nextId: nextId + 1
    });
  };

  deleteTodo = id => {
    const { todos } = this.state;
    this.setState({
      todos: todos.filter(todo => {
        return todo.id !== id;
      })
    });
  };
}
