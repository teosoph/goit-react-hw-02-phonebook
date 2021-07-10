import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";

import Section from "./Components/Section/Section";
import Form from "./Components/Form/Form";
import FilterInput from "./Components/FilterInput/FilterInput";
import ContactsList from "./Components/ContactsList/ContactsList";

export default class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
    name: "",
    number: "",
  };

  // Add contact function
  addContact = ({ name, number }) => {
    const { contacts } = this.state;
    const contact = {
      id: uuidv4(),
      name,
      number,
    };
    console.log(contact);

    contacts.find((contact) => contact.name === name)
      ? alert(`${name} is already in contacts`)
      : this.setState(({ contacts }) => ({
          contacts: [...contacts, contact],
        }));
  };

  // Filtering input function
  filteringInput = (event) => {
    this.setState({ filter: event.target.value });
    console.log({ filter: event.target.value });
  };

  // Change contact list by filter function
  changeContactsByFilter = () => {
    const { contacts, filter } = this.state;
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
    // .sort((a, b) => a.name.localeCompare(b.name));
  };

  render() {
    const { filter } = this.state;

    return (
      <section>
        <Section title={"Phonebook"}>
          <Form onSubmit={this.addContact} />
        </Section>

        <Section title={"      Filter contacts by name"}>
          <FilterInput value={filter} onChange={this.filteringInput} />
        </Section>
        <Section title={"Contacts"}>
          <ContactsList contacts={this.changeContactsByFilter()} />
        </Section>
      </section>
    );
  }
}
