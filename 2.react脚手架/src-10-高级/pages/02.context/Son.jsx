import React, { Component } from "react";
import personContext from "./context";
export default class Son extends Component {
  static contextType = personContext;

  handleClick = () => {
    // console.log(this.person);
    console.log(this.context);
  };

  render() {
    return (
      <>
        <h3 onClick={this.handleClick}>Son...</h3>
        {/* personContext.Consumer组件，负责接受到爷组件传递的数据 */}
        <personContext.Consumer>
          {
            (person) => {
              const { name, age } = person;
              return (
                <ul>
                  <li>姓名：{name}</li>
                  <li>年龄：{age}</li>
                </ul>
              );
            }
          }
        </personContext.Consumer>
      </>
    );
  }
}
