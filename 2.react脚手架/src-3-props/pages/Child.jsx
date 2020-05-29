import React, { Component } from "react";
import PropTypes from "prop-types"; 


export default class Child extends Component {
  // 对传入的props进行类型/必要性检查
  static propTypes = {
    name: PropTypes.string.isRequired, 
    age: PropTypes.number, 
    sex: PropTypes.string,
    updatePerson: PropTypes.func.isRequired,
  };

  // 给props默认值
  static defaultProps = {
    age: 18,
    sex: "女",
  };

  update = () => {
    this.props.updatePerson({
      name: "jack",
      age: 20,
      sex: "男",
    });
  };

  render() {
    // 读取props
    const { name, age, sex } = this.props;

    return (
      <div>
        <h2 onClick={this.update}>Child...</h2>
        <ul>
          <li>姓名: {name}</li>
          <li>年龄: {age}</li>
          <li>性别: {sex}</li>
        </ul>
      </div>
    );
  }
}
