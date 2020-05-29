
import React from "react";

import Child from "./pages/Child";

class App extends React.Component {
  state = {
    person: {
      name: "晓飞张",
      age: 40,
      sex: "男",
    },
  };

  updatePerson = (person) => {
    this.setState({
      person,
    });
  };

  render() {
    const { person } = this.state;

    return (
      <div>
        <h1>App...</h1>
        {/* 以标签属性方式（props）给子组件传递数据 */}
        <Child
          {...person}
          updatePerson={this.updatePerson}
        />
      </div>
    );
  }
}

export default App;
