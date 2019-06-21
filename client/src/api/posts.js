import React, { Component } from "react";
import FormFields from "../widgets/Forms/formFields";
import { firebaseDB } from "../firebase";

class Posts extends Component {
  state = {
    formData: {
      title: {
        element: "input",
        value: "",
        label: true,
        labelText: "Post Title",
        config: {
          name: "post_title_input",
          type: "text",
          className: "form-control",
          id: "InputPostTitle",
          placeholder: "Post Title"
        },
        validation: {
          required: true,
          minLen: 10
        },
        valid: false,
        touched: false,
        validationMessage: ""
      },
      excerpt: {
        element: "textarea",
        value: "",
        label: true,
        labelText: "Post Excerpt",
        config: {
          name: "excerpt_input",
          className: "form-control",
          id: "InputExcerpt",
          placeholder: "Enter Post excerpt here!",
          rows: 4,
          cols: 36
        },
        validation: {
          required: true,
          minLen: 15,
          maxLen: 25
        },
        valid: false,
        touched: false,
        validationMessage: ""
      },
      description: {
        element: "textarea",
        value: "",
        label: true,
        labelText: "Post Description",
        config: {
          name: "description_input",
          className: "form-control",
          id: "InputDescription",
          placeholder: "Enter Post Description here!",
          rows: 20,
          cols: 36
        },
        validation: {
          required: true,
          minLen: 30,
          maxLen: 500
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

          <button type="submit">Publish</button>
        </form>
      </div>
    );
  }
}

export default Posts;
