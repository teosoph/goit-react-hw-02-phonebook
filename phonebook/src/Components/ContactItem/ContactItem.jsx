const ContactItem = ({ contacts }) =>
  contacts.map(({ name }) => {
    return <li>{name}</li>;
  });

export default ContactItem;
