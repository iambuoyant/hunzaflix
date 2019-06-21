import React, { Component } from "react";
import FormFields from "../widgets/Forms/formFields";
import { firebase, firebaseDB } from "../firebase";

class UserLogin extends Component {
  state = {
    status: false,
    formData: {
      email: {
        element: "input",
        value: "",
        label: true,
        labelText: "Email",
        config: {
          name: "email_input",
          type: "email",
          className: "form-control",
          id: "InputEmail",
          ariadescribedby: "emailHelp",
          placeholder: "Enter email"
        },
        validation: {
          required: true
        },
        valid: false,
        touched: false,
        validationMessage: ""
      },
      password: {
        element: "input",
        value: "",
        label: true,
        labelText: "Password",
        config: {
          type: "password",
          className: "form-control",
          id: "InputPassword",
          placeholder: "Password",
          autoComplete: "false"
        },
        validation: {
          required: true
        },
        valid: false,
        touched: false,
        validationMessage: ""
      }
    }
  };
  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({
        status: user ? false : true
      });
    });
  }

  updateForm = newState => {
    this.setState({
      formData: newState
    });
  };

  submitForm = async event => {
    event.preventDefault();
    let UserKey = null;
    let dataToSubmit = {};
    let formIsValid = true;
    //Method for getting valid user and return user key

    const gotUserData = function(snapshot) {
      snapshot.forEach(userSnapshot => {
        const email = userSnapshot.val().email;
        const password = userSnapshot.val().password;
        const key = userSnapshot.key;
        if (
          dataToSubmit.email === email &&
          dataToSubmit.password === password
        ) {
          console.log("Found a Valid User");
          return (UserKey = key);
        }
      });
    };

    for (let key in this.state.formData) {
      dataToSubmit[key] = this.state.formData[key].value;
    }

    for (let key in this.state.formData) {
      formIsValid = this.state.formData[key].valid && formIsValid;
    }

    if (formIsValid) {
      console.log(dataToSubmit);
      try {
        await firebaseDB
          .ref("users")
          .ref.once("value", gotUserData)
          .then(() => {
            if (UserKey != null) {
              console.log("User Valid");

              setTimeout(() => {
                this.props.history.push("/projects");
              }, 300);
            } else {
              console.log("User Not Valid");
            }
          })
          .catch(e => {
            console.log(e);
          });
      } catch (event) {
        alert(event.message);
      }
    }

    return UserKey;
  };

  render() {
    return (
      <div className="container">
        <form onSubmit={this.submitForm}>
          <FormFields
            formData={this.state.formData}
            onblur={newState => this.updateForm(newState)}
            change={newState => this.updateForm(newState)}
          />

          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}

export default UserLogin;
