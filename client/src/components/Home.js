import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Home extends Component {
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

    const styleBtns = {
      maxWidth: "420px",
      maxBlockSize: "600px",
      display: "grid"
    };
    return (
      <div className="container">
        <div className="alert alert-success" style={style} role="alert">
          <h4 className="alert-heading" style={{textAlign: "center"}}>Wellcome to Hunza Flix!</h4>
        </div>
        <div className="container" style={styleBtns}>
          <button
            //style=""
            onClick={this.raiseRegister}
            type="submit"
            className="btn btn-primary m-2"
          >
            <Link className="btn btn-primary" to="/register">
              Register
            </Link>
          </button>
          <button
            // style={styleBtns}
            onClick={this.raiseRegister}
            type="submit"
            className="btn btn-primary m-2"
          >
            <Link className="btn btn-primary" to="/login">
              Login
            </Link>
          </button>
        </div>
        {/* <div className="container" style={styleBtns}>
          <a href="https://hultor.com/hultormovies/">Latest Launches - Oren</a>
        </div> */}
      </div>
    );
  };

  loggedInUser = () => {
    return <h1> Welcome to Hunza Flix </h1>;
  };

  render() {
    console.log("I am in Home");
    return (
      <div>
        {this.state.user.loggedin ? this.loggedInUser() : this.newUserHome()}
      </div>
    );
  }
}
