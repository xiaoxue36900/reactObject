
import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

ReactDOM.render(<App />, document.getElementById("root"));



// 定义工厂函数组件
/* function MyComponent1() {
  console.log('工厂函数', this);
  
  // 组件内部返回要渲染的虚拟DOM对象
  return (
    <div>
      <input />
      <input />
    </div>
  );
} */

// 定义ES6类组件
/* class MyComponent2 extends React.Component {
  // 组件内部返回要渲染的虚拟DOM对象 --> 通过render方法返回
  render() {
    console.log('ES6类组件', this); // this指向ES6类组件实例对象
    return <h1>ES6类组件</h1>;
  }
}
 */

// 使用组件: 组件标签方式使用
/* ReactDOM.render(
  <div>
    <MyComponent1 />
    <MyComponent2></MyComponent2>
  </div>,
  document.getElementById("root")
); */
