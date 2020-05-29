import React from "react";
class App extends React.Component {
  // constructor() {
  //   super();
  //   // 初始化状态
  //   this.state = {
  //     isLikeMe: false,
  //   };
  // }
  // 简写 --> 需要webpack添加babel插件~
  state = {
    isLikeMe: false,
  };

  /* handleClick() {
    // console.log("点我了~~");
    // 更新状态 --> 改变isLikeMe的值
    // 也会更新状态 也会更新用户界面
    console.log(this); // undefined

    this.setState({
      // Cannot read property 'setState' of undefined
      isLikeMe: true,
    });
  } */

  handleClick = () => {
    // 读取状态
    const { isLikeMe } = this.state;
    // 用来更新用户界面的方法
    this.setState({
      isLikeMe: !isLikeMe,
    });
  };

  render() {
    console.log("render()");

    // 读取state
    const { isLikeMe } = this.state;
    // 第一种问题：只要render调用，就需要重新创建函数，性能不好
    // return <h1 onClick={() => { console.log('点我了~~') }}>我喜欢你</h1>;
    // 第二种好
    return (
      <h1 onClick={this.handleClick}>{isLikeMe ? "你喜欢我" : "我喜欢你"}</h1>
    );
  }
}

// 暴露组件语法
export default App;
