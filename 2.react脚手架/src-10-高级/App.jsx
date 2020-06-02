import React, { Component } from "react";

import Hooks from "./pages/08.hooks";
import context from "./pages/08.hooks/context";
export default class App extends Component {
  state = {
    visible: false,
  };
  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  hiddenModal = () => {
    this.setState({
      visible: false,
    });
  };

  render() {
    return (
      // Fragment最终不会生成多余的结构/元素
      // 空标签就相当于Fragment
      <>
        {/* JSX中的注释： */}
        {/* <FragmentDemo />  */}

        {/* 
          personContext.Provider组件就会将 this.state.person 数据传递下去 
          注意：只有后代组件才能接受到
        */}
        {/* <personContext.Provider value={this.state.person}>
          <Father />
        </personContext.Provider> */}

        {/* <Index person={this.state.person}/> */}

        {/* <ForwardRef {...this.state.person} ref={this.xxRef}>
          <p>hello~~~</p>
        </ForwardRef> */}

        {/* <button onClick={this.showModal}>点击显示Modal</button>

        <Modal
          title={<span>app title</span>}
          content={<div>app content...</div>}
          visible={this.state.visible}
          onCancel={this.hiddenModal}
        /> */}

        {/* <Login />
        <Register /> */}

        {/* <A
          render={(count) => {
            return <B count={count} />;
          }}
        /> */}

        <context.Provider value={100}>
          <Hooks />
        </context.Provider>
      </>
    );
  }
}
