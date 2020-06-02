import React, { Component } from "react";

import { NavLink, Route, Switch, Redirect } from "react-router-dom";

import News from "../News";
import Messages from "../Messages";

export default class Home extends Component {
  render() {
    return (
      <div>
        <h2>Home组件内容</h2>
        <div>
          <ul className="nav nav-tabs">
            <li>
              <NavLink className="list-group-item" to="/home/news">
                News
              </NavLink>
            </li>
            <li>
              <NavLink className="list-group-item" to="/home/message">
                Message
              </NavLink>
            </li>
          </ul>
          <Switch>
            <Route path="/home/message" component={Messages} />
            <Route path="/home/news" component={News} />
            <Redirect to="/home/news" />
          </Switch>
        </div>
      </div>
    );
  }
}
