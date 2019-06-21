import React, { Component } from "react";
import FormFields from "../widgets/Forms/formFields";
import { firebaseDB } from "../firebase";

class User extends Component {
  state = {
    formData: {
      name: {
        element: "input",
        value: "",
        label: true,
        labelText: "First Name",
        config: {
          name: "name_input",
          type: "text",
          className: "form-control",
          id: "InputFirstName",
          placeholder: "First Name"
        },
        validation: {
          required: true,
          minLen: 4
        },
        valid: false,
        touched: false,
        validationMessage: ""
      },
      lastname: {
        element: "input",
        value: "",
        label: true,
        labelText: "Last Name",
        config: {
          name: "lastname_input",
          type: "text",
          className: "form-control",
          id: "InputLastName",
          placeholder: "Last Name"
        },
        validation: {
          required: true,
          minLen: 3
        },
        valid: false,
        touched: false,
        validationMessage: ""
      },
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

  updateForm = newState => {
    this.setState({
      formData: newState
    });
  };

  submitForm = async event => {
    event.preventDefault();

    let dataToSubmit = {};
    let formIsValid = true;

    for (let key in this.state.formData) {
      dataToSubmit[key] = this.state.formData[key].value;
    }

    for (let key in this.state.formData) {
      formIsValid = this.state.formData[key].valid && formIsValid;
    }

    if (formIsValid) {
      try {
        await firebaseDB
          .ref("users")
          .push(dataToSubmit)
          .then(() => {
            console.log("You are Registered Member of Hultor Now!");
          })
          .catch(e => {
            console.log(e);
          });
        setTimeout(() => {
          this.props.history.push("/dashboard");
        }, 1000);
      } catch (event) {
        alert(event.message);
      }
    }
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

          <button type="submit">Register</button>
        </form>
      </div>
    );
  }
}

export default User;
