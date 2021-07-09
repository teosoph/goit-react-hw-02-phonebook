import ContactItem from "../ContactItem/ContactItem";

const ContactsList = ({ contacts }) => (
  <ol type="1">
    <ContactItem contacts={contacts} />
  </ol>
);

export default ContactsList;
