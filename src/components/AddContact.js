import React from "react";
import uuid from "react-uuid";
class AddContact extends React.Component {
  state = {
    name: "",
    email: "",
    isError: {
      isNameError: false,
      isEmailError: false,
    },
  };
  onChange = (e) => {
    this.setState({
      isError: {
        ...this.state.isError,
        isNameError: false,
        isEmailError: false,
      },
    });
    this.setState({ [e.target.name]: e.target.value });
  };
  addForm = (e) => {
    e.preventDefault();
    if (this.state.email === "" || this.state.name === "") {
      this.setState({
        isError: {
          ...this.state.isError,
          isNameError: true,
          isEmailError: true,
        },
      });
      return;
    }
    this.props.addContactHandler({
      name: this.state.name,
      email: this.state.email,
      id: uuid(),
    });
    this.setState({
      nam: "",
      email: "",
      isError: {
        isNameError: false,
        isEmailError: false,
      },
    });
  };
  render() {
    return (
      <div className="ui main">
        <h2>Add Contact</h2>
        <form className="ui form" onSubmit={this.addForm}>
          <div className="field">
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={this.state.name}
              onChange={this.onChange}
            />
            {this.state.isError.isNameError && (
              <p style={{ color: "red" }}>{"*Name is Required"}</p>
            )}
          </div>
          <div className="field">
            <label>email</label>
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={this.state.email}
              onChange={this.onChange}
            />
            {this.state.isError.isEmailError && (
              <p style={{ color: "red" }}>{"*Email is Required"}</p>
            )}
          </div>
          <button className="ui button blue">Add</button>
        </form>
      </div>
    );
  }
}
export default AddContact;
