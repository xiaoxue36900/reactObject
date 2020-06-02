
import React, { Component } from "react";

class ClassComp extends Component {
  // 组件内部返回要渲染的虚拟DOM对象 --> 通过render方法返回
  render() {
    console.log("ES6类组件", this); 
    return <h1>ES6类组件</h1>;
  }
}

export default ClassComp;
