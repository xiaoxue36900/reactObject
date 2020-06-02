import React, { Component } from "react";
import PropTypes from "prop-types";

import Item from "../Item";

import "./index.css";

export default class List extends Component {
  static propTypes = {
    todos: PropTypes.array.isRequired,
    updateTodo: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired,
  };

  render() {
    // 读取props
    const { todos, updateTodo, delTodo } = this.props;

    return (
      <ul className="todo-main">
        {todos.map((todo) => {
          // 遍历的每一项元素需要有一个唯一的key属性(有id用id)
          return (
            <Item
              key={todo.id}
              todo={todo}
              updateTodo={updateTodo}
              delTodo={delTodo}
            />
          );
        })}
      </ul>
    );
  }
}
