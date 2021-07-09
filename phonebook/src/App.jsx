import React, { Component } from "react";
// import { v4 as uuidv4 } from "uuid";

import Section from "./Components/Section/Section";
import Form from "./Components/Form/Form";
import ContactsList from "./Components/ContactsList/ContactsList";

export default class App extends Component {
  state = {
    contacts: [],
    name: "",
  };

  // Add contact function
  addContact = ({ name }) => {
    this.setState(({ contacts }) => {
      console.log(contacts);

      return { contacts: [...contacts] };
    });

    // console.log(this.state);
  };

  render() {
    const { contacts } = this.state;

    return (
      <section>
        <Section title={"Phonebook"}>
          <Form onSubmit={this.addContact} />
        </Section>

        <Section title={"Contacts"}>
          <ContactsList contacts={contacts} />
        </Section>
      </section>
    );
  }
}
