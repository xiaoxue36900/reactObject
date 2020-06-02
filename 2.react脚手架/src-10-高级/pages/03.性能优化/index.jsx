import React, { Component, PureComponent } from "react";
export default class Index extends PureComponent {
  state = {
    num: 1,
  };

  update = () => {
    this.setState({
      num: this.state.num + 1,
    });
  };

  render() {
    console.log("render()");

    return <button onClick={this.update}>点击更新</button>;
  }
}
