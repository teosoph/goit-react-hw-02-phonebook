const ContactItem = ({ contacts }) =>
  contacts.map(({ name }) => {
    console.log(name);
    return <li>{name}</li>;
  });

export default ContactItem;
