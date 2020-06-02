import React, { Component } from "react";
import PropTypes from "prop-types";

import "./index.css";

export default class Item extends Component {
  static propTypes = {
    todo: PropTypes.object.isRequired,
    updateTodo: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired,
  };

  handleChange = (e) => {
    const { updateTodo, todo } = this.props;
    updateTodo(todo.id, e.target.checked);
  };
  state = {
    display: "none",
  };
  // 不行
  // display = "none";

  handleEnter = () => {
    // 怎么样控制显示隐藏？
    this.setState({
      display: "block",
    });
  };

  handleLeave = () => {
    this.setState({
      display: "none",
    });
  };

  handleDel = () => {
    const { id } = this.props.todo;
    if (window.confirm("你确认要删除当前数据吗？")) {
      this.props.delTodo(id);
    }
  };

  render() {
    const { name, isCompleted } = this.props.todo;

    return (
      <li onMouseEnter={this.handleEnter} onMouseLeave={this.handleLeave}>
        <label>
          <input
            type="checkbox"
            onChange={this.handleChange}
            checked={isCompleted}
          />
          <span>{name}</span>
        </label>
        <button
          className="btn btn-danger"
          style={{ display: this.state.display }}
          onClick={this.handleDel}
        >
          删除
        </button>
      </li>
    );
  }
}
