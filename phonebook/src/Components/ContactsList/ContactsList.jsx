import ContactItem from "../ContactItem/ContactItem";

const ContactsList = ({ contacts }) => (
  <ul>
    <ContactItem contacts={contacts} />
  </ul>
);

export default ContactsList;
