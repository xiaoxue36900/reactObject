import React, { Component } from "react";
import withForm from "./withForm"
@withForm('登录组件')
class Login extends Component {
  render() {
    const { handleChange, handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit}>
        用户名：
        <input type="text" onChange={handleChange("username")} /> <br />
        密码：
        <input type="password" onChange={handleChange("password")} />
        <br />
        <button type="submit">登录</button>
      </form>
    );
  }
}
export default Login;
