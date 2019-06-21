import React, { Component } from "react";
import { connect } from "react-redux";
import { Movies } from "./actions/index.js";
import Routes from "./routes";

import "./App.css";

class App extends Component {
  render() {
    return <Routes />;
  }
}

export default connect(
  null,
  { Movies }
)(App);
