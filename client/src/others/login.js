import React, { Component } from "react";
import { firebase, googleAuth } from "../firebase";

class Login extends Component {
  state = {
    status: false,
    statuslogin: false
  };

  handleSubmit = async event => {
    event.preventDefault();
    try {
      await firebase.auth().signInWithPopup(googleAuth);
      this.props.userHasAuthenticated(true);
      setTimeout(() => {
        this.props.history.push("/dashboard");
      }, 1000);
    } catch (e) {
      alert(e.message);
    }
  };
  onLogin = async event => {
    event.preventDefault();
    console.log("Login button Clicked");
  };
  signOut = () => {
    firebase.auth().signOut();
  };

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({
        status: user ? false : true
      });
    });
  }

  render() {
    return (
      <div>
        <div className="fixed-width container">
          <div className="row">
            <div className="col-sm">
              <span>
                <h3>Login to get free access to our project Resources</h3>
              </span>
              <form>
                <div className="form-group">
                  <label htmlFor="InputEmail">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="InputEmail"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="InputPassword">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="InputPassword"
                    placeholder="Password"
                    autoComplete="false"
                  />
                </div>

                <button
                  onClick={this.onLogin}
                  type="submit"
                  className="btn btn-primary"
                >
                  Login
                </button>
              </form>

              {/*   {this.state.status ? (
                <button
                  className="btn btn-primary mt-2"
                  onClick={this.handleSubmit}
                >
                  Login with Google Account
                </button>
              ) : (
                <button className="btn btn-primary mt-2" onClick={this.signOut}>
                  {" "}
                  Logout{" "}
                </button>
              )} */}
              <div className="clearfix" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
