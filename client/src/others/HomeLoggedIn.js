import React, { Component } from "react";

export default class HomeLoggedIn extends Component {
  state = {
    user: {
      loggedin: false
    }
  };
  newUserHome = () => {
    const style = {
      marginTop: "10px",
      marginBottom: "20px"
    };

    return (
      <div className="container">
        <div className="alert alert-success" style={style} role="alert">
          <h4 className="alert-heading">Wellcome to Hultor!</h4>
          <p>Now Your are logged In</p>
          <hr />
          <p className="mb-0">You can access our project resources</p>
        </div>
      </div>
    );
  };

  loggedInUser = () => {
    return <h1> Welcome to Home </h1>;
  };

  render() {
    return (
      <div>
        {this.state.user.loggedin ? this.loggedInUser() : this.newUserHome()}
      </div>
    );
  }
}
