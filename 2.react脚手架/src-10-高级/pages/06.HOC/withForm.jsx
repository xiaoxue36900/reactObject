import React, { Component } from "react";

export default function withForm(title) {
  return function (WrappedComponent) {
    // WrappedComponent组件
    return class extends Component {
      static displayName = `Form(${
        WrappedComponent.displayName || WrappedComponent.name || "Component"
      })`;
  
      // 高阶函数
      handleChange = (key) => {
        return (e) => {
          this.setState({
            [key]: e.target.value.trim(),
          });
        };
      };
  
      handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
      };
  
      render() {
        return (
          <>
            <h1>{title}</h1>
            <WrappedComponent
              // 使用props方式 将复用的代码传递给你
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
            />
          </>
        );
      }
    };
  }
}