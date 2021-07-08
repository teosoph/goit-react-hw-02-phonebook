import PropTypes from 'prop-types';



const Contacts = ({ name }) =>
        
        <ul>

<li>{name}</li>
            
        </ul>

export default Contacts



Contacts.propTypes = {
    name: PropTypes.string.isRequired,

};