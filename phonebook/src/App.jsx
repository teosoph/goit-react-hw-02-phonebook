import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";

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
    console.log(name);

    const { contacts } = this.state;
    const contact = {
      id: uuidv4(),
      name,
    };
    console.log(contact);

    contacts.find((contact) => contact.name === name);
    this.setState(({ contacts }) => ({
      contacts: [...contacts, contact],
    }));
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
