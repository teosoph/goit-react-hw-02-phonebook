import React, { Component } from "react";
import styles from "../../App.css";

class Form extends Component {
  state = {
    name: "",
  };

  // Input handler function
  inputHandler = (event) => {
    this.setState({ [event.target.name]: event.target.value });
    // console.log(event.target.name, event.target.value);
    // console.log(this.state);
  };

  //Submit handler function
  submitHandler = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state);
    // console.log(this.state);

    this.cleanInput();
  };

  // Cleaning input function
  cleanInput = () => {
    this.setState({
      name: "",
    });
  };

  render() {
    const name = this.state.name;
    // console.log(name);

    return (
      <form className={styles.form} onSubmit={this.submitHandler}>
        <label>
          Name
          <input
            value={name}
            type="text"
            name="name"
            onChange={this.inputHandler}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
          />
        </label>

        <button type="submit">Add contact</button>
      </form>
    );
  }
}

export default Form;
