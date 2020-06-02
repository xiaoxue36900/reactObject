import React, { Component } from "react";
import ReactDOM from "react-dom";

import Child from "./Child";
export default class App extends Component {
  constructor() {
    super(); // 调用父类的构造函数
    console.log("App  constructor()");
  }

  componentDidMount() {
    console.log("App  componentDidMount()");
  }

  componentWillMount() {
    console.log("App  componentWillMount()");
  }

  componentWillReceiveProps() {
    console.log("App  componentWillReceiveProps()");
  }

  shouldComponentUpdate() {
    console.log("App  shouldComponentUpdate()");
    // 专门做性能优化
    return true; // 代表要重新渲染
  }

  componentWillUpdate() {
    console.log("App  componentWillUpdate()");
  }

  componentDidUpdate() {
    console.log("App  componentDidUpdate()");
  }

  componentWillUnmount() {
    console.log("App   componentWillUnmount()");
  }

  render() {
    console.log("App  render()");
    return (
      <div
        onClick={() => {
        }}
      >
        <h1>React生命周期函数</h1>
        <Child />
      </div>
    );
  }
}
