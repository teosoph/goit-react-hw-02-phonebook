const ContactItem = ({ contacts }) =>
  contacts.map(({ id, name }) => {
    return <li key={id}>{name}</li>;
  });

export default ContactItem;
